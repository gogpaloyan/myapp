import React, { useEffect, useState } from "react";
import s from "./max.module.css"



function Max({count = 10}){
    let arr = ["lists",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,3,3,38,39,40,41,42,43,44]
    
    const [text, setText] = useState("")
    const [bb, setbb] = useState(arr)
    useEffect(() => {
       return ()  => po(1)
    }, [])


    const [todo, setTodo] = useState([])
    const page = []
    const cl = Math.ceil(bb.length / count)
    for(let i = 1; i <= cl; i++){
        page.push(i)
    }
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




    return(
        <div className={s.max}>
            <form onSubmit={(e) => {
                e.preventDefault();
                if(text.length >= 1){
                    setbb([text,...bb])
                    setText("")
                    po()
                }
              
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
          <div>{todo.map((u)=> <div className={s.maxx} key={Math.random()}>{u}</div>)}</div>

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