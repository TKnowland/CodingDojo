import Task from "./task";

const List = (props) => {

    return(
        <>
            <div>
                {props.tasks.map((task, idx) => {
                    return <div key={idx}>
                        <Task task={task} idx={idx} deleteTask={props.deleteTask}/>
                    </div>
                })}
            </div>
        </>
    )
}

export default List;