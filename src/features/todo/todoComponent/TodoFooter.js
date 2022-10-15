import './TodoFooter.css'

function TodoFooter({todos, cleare, value}){
const completed = todos.filter((todo) => todo.completed).length
    return(<div className={value ? 'TodoFooter' : "todoFooter"}>
<span> completed {todos.length} / {completed} </span>
<button onClick={cleare}>cleare</button>
    </div>)
}

export default TodoFooter