const form = document.querySelector('form');
const list = document.querySelector('#list');
const taskInp = document.querySelector('#task-inp');

// ============================================== Utility functions

function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// ===================================================



const todos = JSON.parse(window.localStorage.getItem('todos') || '[]');

function addTodo(todo) {
    todos.push(todo);    
    flushToLocalStorage(todos);
}

function deleteTodo(id) {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index === -1) {
        return;
    }
    todos.splice(index, 1);
    flushToLocalStorage(todos);
}

function flushToLocalStorage() {
    window.localStorage.setItem('todos', JSON.stringify(todos));
}

// ========================================================= UI Methods/DOM=====


function refreshUI(todos) {
    // Inefficient
    // React solves this problem out of the box for you
    while (list.firstChild) {
        list.firstChild.remove();
    }

    for (let todo of todos) {
        const li = document.createElement('li');
        const span = document.createElement('span');

        const trashIcon = document.createElement('i');
        trashIcon.classList.add('bi', 'bi-trash');
        span.append(trashIcon);
       

        li.classList.add('list-group-item', 'd-flex', 'justify-content-between');
        li.innerText = todo.task;
        li.setAttribute('id', todo.id);

        li.append(span);

        list.append(li);
    }
}

// ============================================================= Events=================

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const taskText = form.elements[0].value;

    if (taskText.trim().length === 0) {
        taskInp.classList.add('border', 'border-danger', 'border-2');
        return;
    }

    addTodo({ id: generateUUID(), task: taskText, completed: false });
    refreshUI(todos);
});

list.addEventListener('click', function (event) {
    if (event.target.nodeName !== "I") {
        return;
    }

    const id = event.target.parentElement.parentElement.getAttribute('id');
    deleteTodo(id);
    refreshUI(todos);
})

taskInp.addEventListener('keyup', function () {
    const taskInpValue = taskInp.value;
    console.log(taskInpValue);
    if (taskInpValue.trim().length > 0 && taskInp.classList.contains('border-danger')) {
        taskInp.classList.remove('border','border-danger');
    }
})

// ========================================== Start The App

function startApp() {

    refreshUI(todos);
}

startApp();

