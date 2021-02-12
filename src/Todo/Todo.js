import './Todo.css';
import React, { useState , useEffect } from 'react';
import Task from './Task';
import CreateTask from './CreateTask';

const Todo = () => {
    
    const [tasks,SetTasks] = useState([
        {
            title : "study react",
            completed : true
        },
        {
            title : "study Redux",
            completed : false
        }
    ]);
    const [tasksRemaining, setTasksRemaining] = useState(0);

    useEffect(() => {
         setTasksRemaining(tasks.filter(task => !task.completed).length) 
    });

    const addTask = title => {
        SetTasks ([...tasks, { title, completed: false }]);
    };

    const completeTask = index => {
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        SetTasks(newTasks);
    };

    const removeTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        SetTasks(newTasks);
    };

    return ( 
        <div className="todo-container">

            <div className="">Pending tasks ({tasksRemaining})</div>

            <div className="">TODO APP</div>
                <div className="tasks">
                    {tasks.map((task, index) => (
                        <Task
                            task={task}
                            index={index}
                            key={index}
                            completeTask={completeTask}
                            removeTask={removeTask}
                        />
                    ))}
                </div>
                <div className="create-task" >
                    <CreateTask addTask={addTask} />
                </div>
            </div>
     );
}

export default Todo;