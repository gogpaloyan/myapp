import { useState } from "react"
import { Calendar } from "react-calendar"
import './form.css'



function Form1({onAdd, value}){


    const [name, setName] = useState("")
    const [surName, setSurName] = useState("")
    const [gender, setGender] = useState("")
    const [text, setText] = useState("")
    const [birth, setBirth] = useState(new Date())
    return(
      <div>
        <form onSubmit={(e) => {
            e.preventDefault()
           if(name.length >= 1 && surName.length >= 1 && text.length >= 1){
            onAdd({name, surName, birth, gender, text})
            setName("")
            setSurName("")
            setText("")
            setBirth(new Date())
           }
       

        }} className={value ? "form" : "Form"}> 
           <fieldset className={value ? "fieldset" : "Fieldset"}>
           <div>
             <div><span>Name</span></div>
             <div><input required type="text" placeholder=' Your name' value={name} onChange={(e) => setName(e.target.value)} /></div>
           </div>
           <div>
              <div><span>SurName</span></div>
              <div><input required type="text" placeholder=' Your sername' value={surName}  onChange={(e) => setSurName(e.target.value)}/></div>
           </div>
           <div>
             <div><span>Text loren</span></div>
             <div><textarea required type="text" placeholder='  Your text' value={text} onChange={(e) => setText(e.target.value)}/></div>
           </div>
           <div>
             <div><span>Birthday</span></div>
               <input type="text" value={birth} disabled onChange={(e)=> setBirth(e.target.value)}/>
           </div>
            <div className='cale'>
              <div className='calen'> 
              <Calendar onChange={setBirth} value={birth} />
              </div> </div>
           <div>
             <div><span>Gender</span></div>
             <div className={value ? "radio" : "Radio"}>
              <span><input required type="radio"  id="male" name='gender' value="male" onChange={(e) => setGender(e.target.value)}/>male</span>
              <span><input required type="radio" id="female" name='gender'  value="female" onChange={(e) => setGender(e.target.value)}/>female</span>
             </div>
           </div>
         
           <div>
             <div><span>Submit</span></div>
             <div><button className={value ? "btnform" : "Btnform"}>Add Form</button></div>
           </div>
         
           </fieldset>
       
         </form>
        
         </div>
         
    )

}

export default Form1