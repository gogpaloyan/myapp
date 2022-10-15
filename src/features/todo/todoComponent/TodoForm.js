import { useState } from "react"
import './TodoForm.css'

function TodoForm({oAdd, value}){
    const [text, setText] = useState("")

    return(
        <form className={value? "TodoForm" : "todoForm"} onSubmit={(e) => {
            e.preventDefault();
            if(text.length > 1){
            oAdd(text)
            setText("")
            }
        }}>
            <input type="text" required placeholder="Add text ..." maxLength={15} value={text} onChange={(e) => {
                setText(e.target.value)
            }} />
            <button>Add</button>

        </form>
    )
}

export default TodoForm