import React, { useEffect } from 'react'
import './register.css'
import Form1 from './form/Form1'
import { onADD, registerSelector, onDelete } from './registerSlice'
import { useDispatch, useSelector } from 'react-redux'
<<<<<<< HEAD:src/features/register/Register.js
import TextCount from '../contacts/contact/TextCount'
=======
import TextCount from '../contact/TextCount'
import Max from './max/Max'
>>>>>>> d30d0bbd3ebbd812471a5deeb8e106a861988d30:src/features/component/main/about/Register.js





<<<<<<< HEAD:src/features/register/Register.js


=======
>>>>>>> d30d0bbd3ebbd812471a5deeb8e106a861988d30:src/features/component/main/about/Register.js
function Register({value}){


  const registerSelect = useSelector(registerSelector)
  const dispatch = useDispatch()


  let regData = registerSelect.map((item) => {
    return (
      <div key={item.id} className='todoName'>
        <div className='imgurl'><img alt='' src={item.url} /></div>
        {item.name} {item.surName} 
        <div className='todogender'>{item.gender}</div>
        <div className='todoText'> <TextCount value={value} text={item.text} max={80}/>       
        </div>
        <div>{item.birth.substring(0,15)}</div>
        <div className='todoDates'>{item.birth.substring(15, item.birth.length)}</div>
        <div className='btndel'><button onClick={() => dispatch(onDelete(item.id))}>delete</button></div>
      </div>
  )})

    return <div className={value ? "about" : "About"}>
      <Form1 value={value} onAdd={(text) => dispatch(onADD(text))}/>

{regData}

    </div>
}

export default Register