const Task = props => {
    const { task , index , completeTask , removeTask } = props; //Object

    return (
        <div className="task" style={{ textDecoration: task.completed ? "line-through" : "" }}>
            {task.title}

            <button style={{ background: "#fe544a" }} onClick={() => removeTask(index)}>x</button>
            <button className="bg-primary" onClick={() => completeTask(index)}>Complete</button>
            
        </div>
    );
}

export default Task;