import { useDispatch, useSelector } from "react-redux"
import TodoList from "./todoComponent/TodoList"
import TodoFooter from "./todoComponent/TodoFooter"
import TodoForm from "./todoComponent/TodoForm"
import { cleare, onAdd, onChange, onDelete, selectTodo } from "./todoSlice"
import  './TodoApp.css'



function TodoApp({value}){

    const todos = useSelector(selectTodo)
    const dispatch = useDispatch()

    return(<div className="todoApps">
<div className={value ? "TodoApp" : "todoApp"}>
        <h1>Todo Work</h1>
 <TodoForm value={value}  oAdd={ (text) => dispatch(onAdd(text))}/>
 <TodoList value={value} onChange={(newTodo) => dispatch(onChange(newTodo))}
  onDelete={(id) => dispatch(onDelete(id))} todos={todos}/>
 <TodoFooter value={value} cleare={() => dispatch(cleare())} todos={todos}/>

</div>
</div>
    )
}


export default TodoApp