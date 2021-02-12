const TodoForm = ({addTodo}) => {
    let input;

    return ( 
        <div>
            <h1>Here's simple to do app :</h1>
            <input ref={node => { input = node; }} />
            <button onClick={() => { addTodo(input.value); input.value = '';}}>+</button>
        </div>
     );
}
 
export default TodoForm;