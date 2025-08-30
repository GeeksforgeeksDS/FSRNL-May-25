import { useEffect, useContext } from 'react';
import styles from './Todo.module.css';
import { Trash2, Edit2Icon } from 'lucide-react';
import UserContext from '../../store/user-context';

const Todo = ({ todo, deleteTodo, markCompleted }) => {

    const {role} = useContext(UserContext);

    const deleteTodoHandler = () => {
        deleteTodo(todo.id);
    }

    const markCompletedHandler = () => {
        markCompleted(todo.id);
    }

    useEffect(() => {
        console.log('Inside useEffect')
        return () => {
            console.log('Inside cleanup')
        }
    }, []);

    return (
        <li className={`${styles.todo} ${todo.completed ? styles.completed : ""}`} >
            <span>{todo.task}</span>
            <span>
                <span onClick={deleteTodoHandler} className={styles['trash-btn']}><Trash2 /></span>
                {role === 'Admin' && <Edit2Icon/>}
                <input onChange={markCompletedHandler} type="checkbox" defaultChecked={todo.completed} />
            </span>
        </li>
    )
}

export default Todo
