import {useState} from 'react';
import styles from './task.module.css'



const Task = (props) => {
    const [isDone, setIsDone] = useState(false)
    const checkTask = (e) => {
        setIsDone(e.target.checked)
    }

    const onClickHandler = (idx) => {
        props.deleteTask(idx);
    }


    
    return(
        <>
            <div className={styles.listItem}>
                {
                    isDone ? 
                    <p className={styles.strike}>{props.task.task}</p> :
                    <p>{props.task.task}</p>
                }
                <input type="checkbox" onChange={(e) => {checkTask(e)}}/>
                <button className = {styles.delete} onClick={(e) => {onClickHandler(props.idx) }}>Delete</button>

            </div>
        </>
    );
}

export default Task;