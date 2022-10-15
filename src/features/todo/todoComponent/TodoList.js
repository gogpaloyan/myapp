import TodoItem from "./TodoItem"
import './TodoList.css'

function TodoList({todos, onChange, onDelete, value}){

    let todo = todos.map((tod) => {
       return (<TodoItem value={value} onChange={onChange} onDelete={onDelete} key={tod.id} tod={tod}/>)
    })

    return(
        <div draggable={true} className={value ? "TodoList" : "todoList"}>

            {todo}
        </div>
    )
}

export default TodoList