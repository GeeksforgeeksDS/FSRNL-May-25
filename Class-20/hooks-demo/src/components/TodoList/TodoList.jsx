import React from 'react'
import Todo from '../Todo/Todo';
import classes from './TodoList.module.css';

const TodoList = ({ todos, deleteTodo, markCompleted }) => {
    return (
        <ul className={ classes.red }>
            {
                todos.map((todo) => {
                    return <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} markCompleted={markCompleted } />
                })
            }
        </ul>
    )
}

export default TodoList
