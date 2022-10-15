import React, { useState } from 'react';
import {Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './features/component/navbar/Navbar';
import Toogle from './features/component/toogle/Toggle';





function App() {

  const [value, setValue] = useState(true)

  const Register = React.lazy( () => import('./features/component/main/about/Register'))
  const Contact = React.lazy( () => import('./features/component/main/contact/Contact'))
  const TodoApp = React.lazy(() => import('./features/todo/TodoApp'))
  
  return (

    <div className={value ? "App" : "app"}>

 
             
    <Navbar value={value}  setValue={setValue}/>
      <div>
    <Routes >
      <Route path='/' element={<React.Suspense fallback=""><Contact value={value}/></React.Suspense>} />
      <Route path='posts' element={<React.Suspense fallback=""><Register value={value}/></React.Suspense>} />
      <Route path='element'  element={<React.Suspense fallback=""><TodoApp value={value}/></React.Suspense> } />

    </Routes>
       

      
    </div>
   <div className="toogle"><Toogle value={value} setValue={setValue}/>    </div>
    </div>
         
  );
}

export default App;
