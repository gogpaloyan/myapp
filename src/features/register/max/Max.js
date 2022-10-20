import React, { useEffect, useRef, useState } from "react";
import s from "./max.module.css"



function Max({arr,count = 10}){

   
    const [bb, setbb] = useState(arr)
    const [text, setText] = useState("")
    const [todo, setTodo] = useState([])

    const page = []
    const cl = Math.ceil(bb.length / count)
    for(let i = 1; i <= cl; i++){page.push(i)}
    const g = []

function po(p = 1){
    p = p * count
    let i = p - count;
   while(i < p){
    if(bb[i] !== undefined){
        g.push(bb[i])
    }
    i++
   }
      setTodo(g)
}

useEffect(() => {
    console.log("ded")
   return () => po()
 }, [bb])

    return(
        <div className={s.max}>
            <form onSubmit={(e) => {
                e.preventDefault();
                setbb([text,...bb])
                setTodo([text,...bb])
                setText("")              
            }}>
                <input required type="text" onChange={(e)=>setText(e.target.value)} value={text} />
                <button>Add</button>
                </form>
<div>
          {page.map((p) => {
            return (
                <span className={s.maxe} key={Math.random()} onClick={() => {po(p)}}>{p}</span>
            )
          })}
          </div>


                      <br></br>
                      <br></br>
          <div>{todo.map((u,i)=> <div className={s.maxx} key={arr[i]}>{u}
          
          <button onClick={() => setTodo(todo.filter((item, index) => todo[index] !== todo[i]))} className="btn">X</button>
         
       
          
          
          </div>)}</div>

          <div className={s.but}>
          {page.map((p) => {
            return (
                <span className={s.maxe} key={Math.random()} onClick={() => {po(p)}}>{p}</span>
            )
          })}
          </div>
        </div>
    )
}

export default Max