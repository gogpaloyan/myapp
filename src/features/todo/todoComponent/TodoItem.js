import './TodoItem.css'

function TodoItem({value, tod, onChange, onDelete}){
    

    return(
        <div >
            <label className={value ? "TodoItem" : "todoItem"}>
            <input type="checkbox" checked={tod.completed} 
            onChange={(e) => {
                onChange({
                    ...tod,
                    completed: e.target.checked
                })

            }} />
        {tod.title}
        <button onClick={() => onDelete(tod.id)}>delete</button>
        </label>
        </div>
    )
}

export default TodoItem