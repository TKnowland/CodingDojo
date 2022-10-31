import {useState} from 'react';
import styles from './task.module.css'

const Form = (props) => {
    const [taskName, setTaskName] = useState("");


    const createNewTask = (e) => {
        e.preventDefault();
        let newTask = {
            task: taskName
        }
        props.addTask(newTask)
        setTaskName("")
    }


    return(
        <>
            <form onSubmit={createNewTask}>
                <input onChange={(e) => {setTaskName(e.target.value)}} value={taskName} />
                <button className={styles.add}>Add</button>
            </form>
            
        </>
    );
}

export default Form