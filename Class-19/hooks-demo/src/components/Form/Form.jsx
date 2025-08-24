import React, { useRef } from 'react';
import classes from './Form.module.css';
import { v4 as uuid } from 'uuid';

const Form = ({addTodo}) => {

    const todoInpRef = useRef()

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const task = todoInpRef.current.value;
        // upward pass
        addTodo({ id: uuid(), task: task, completed: false });
        todoInpRef.current.value = "";
    }

    return (
        <form onSubmit={formSubmitHandler} className={classes.form}>
            <h1>Add Todos</h1>
            <input type="text" placeholder='Add Todos' ref={todoInpRef}/>
        </form>
    )
}

export default Form
