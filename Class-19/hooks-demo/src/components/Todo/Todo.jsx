import styles from './Todo.module.css';
import { Trash2 } from 'lucide-react';

const Todo = ({ todo, deleteTodo, markCompleted }) => {

    const deleteTodoHandler = () => {
        deleteTodo(todo.id);
    }

    const markCompletedHandler = () => {
        markCompleted(todo.id);
    }

    return (
        <li className={`${styles.todo} ${todo.completed ? styles.completed : ""}`} >
            <span>{todo.task}</span>
            <span>
                <span onClick={deleteTodoHandler} className={styles['trash-btn']}><Trash2 /></span>
                <input onChange={markCompletedHandler} type="checkbox" defaultChecked={todo.completed} />
            </span>
        </li>
    )
}

export default Todo
