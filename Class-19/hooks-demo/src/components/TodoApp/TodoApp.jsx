import TodoList from '../TodoList/TodoList'
import Form from '../Form/Form'
import styles from './TodoApp.module.css';
import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

const TodoApp = () => {

    const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]');

    const [todos, setTodos] = useState(initialTodos);

    const [count, setCount] = useState(0);

    const addTodo = (todo) => {
        setTodos((prevState)=>[...prevState, todo]);
    }

    const deleteTodo = (id) => {
        setTodos((prevState) => prevState.filter((todo) => todo.id != id));
    }

    const markCompleted = (id) => {
        setTodos((prevState) => prevState.map((todo) => todo.id !== id ? { ...todo } : { ...todo, completed: !todo.completed }));
    }

    // This will get executed after each render irrespective of whatever state changes.
    useEffect(() => {
        console.log('Inside use effect without dependency array');
    });

    // This will get executed only after the first render
    useEffect(() => {
        console.log('Inside use effect with empty dependency array');
    }, []);


    // This will get executed when `todos` changes
    useEffect(() => {
        console.log('Inside use effect with todos dependency array');
        window.localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    // This will get executed when `count` changes
    useEffect(() => {
        console.log('Inside use effect with count as dependency array');
    }, [count]);


    // This will get executed when `count` or `todos` changes
    useEffect(() => {
        console.log('Inside use effect with count, todos as dependency array');
    }, [count, todos]);


    return (
        <section className={styles["todo-app"]}>
            <Form addTodo={ addTodo } />
            <TodoList todos={todos} deleteTodo={deleteTodo} markCompleted={markCompleted} />
            <hr />
            <h2>{ count }</h2>
            <button onClick={()=> setCount(count+1)}>Increment+</button>
        </section>
    )
}

export default TodoApp
