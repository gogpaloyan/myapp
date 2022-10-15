import React, { useState } from 'react';
import {Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './features/component/navbar/Navbar';
import Toogle from './features/component/toogle/Toggle';
import Register from './features/component/main/about/Register'
import Contact from './features/component/main/contact/Contact'
import TodoApp from './features/todo/TodoApp'




function App() {

  const [value, setValue] = useState(false)


  
  return (

    <div className={value ? "App" : "app"}>

 
             
    <Navbar value={value}  setValue={setValue}/>
      <div>
    <Routes >
      <Route path='/' element={<Contact value={value}/>}/>
      <Route path='posts' element={<Register value={value}/>} />
      <Route path='element'  element={<TodoApp value={value}/>}/>

    </Routes>
       
    <div onClick={() => setValue(!value)} className="toogle"><Toogle value={value}/>    </div>
      
    </div>
  
    </div>
         
  );
}

export default App;
