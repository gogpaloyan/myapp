import { useState } from 'react'
import s from './contact.module.css'

function TextCount({text, max, value}){
    const [more, setMore] = useState(true)

    return( 
    <div className={value ? s.maxText : s.MaxText}>  {more ? text.substring(0, max) : text + " "} 
    {text.length < max ? "" : <span className={value ? s.more : s.More} onClick={() => setMore(!more)}>{more ?  "...more" : " less"}</span>} 
        </div>)
}

export default TextCount