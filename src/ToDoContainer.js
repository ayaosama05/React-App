import {React, useState} from 'react';

function TodoForm({ addTodo }) {
    const [value, setValue] = React.useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
    );
}

const ToDoContainer = () => {
    const [todos , setTodos ] = useState([
        {text: "Learn about React"},
        {text: "Learn about Redux"},
        {text: "Learn about API"},
    ])

    setTodos(todos);

    return(
        <div>
            <h1>To Do :</h1>
            {todos.map((todo, index) => (
            <Todo
            key={index}
            index={index}
            todo={todo}
            />
            ))}
             <TodoForm addTodo={addTodo} />
        </div>
    )
}

export default ToDoContainer;