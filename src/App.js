import React, { useState } from 'react';
import {Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './features/component/navbar/Navbar';
import Toogle from './features/component/toogle/Toggle';
import Max from './features/register/max/Max';






function App() {

  const [value, setValue] = useState(true)
  const VideoPlayer = React.lazy(() => import('./features/component/main/memo/VideoPlayer'))
   const Register = React.lazy( () => import('./features/register/Register'))
  const Contact = React.lazy( () => import('./features/contacts/contact/Contact'))
  const TodoApp = React.lazy(() => import('./features/todo/TodoApp'))




  return (

    <div className={value ? "App" : "app"}>

 
             
    <Navbar value={value}  setValue={setValue}/>
      <div>
    <Routes >
      <Route  path='/' element={<React.Suspense fallback="loading"><Contact value={value}/></React.Suspense>} />
      <Route  path='posts' element={<React.Suspense fallback="loading"><Register value={value}/></React.Suspense>} />
      <Route  path='element'  element={<React.Suspense fallback="loading"><TodoApp value={value}/></React.Suspense> } />
      <Route  path='max'  element={<Max arr={["lists",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44]}/>}/>
      <Route  path='memo'  element={<React.Suspense fallback="loading"><VideoPlayer/></React.Suspense>}/>

    </Routes>
       

      
    </div>
   <div onClick={()=> setValue(!value)} className="toogle"><Toogle value={value}/>    </div>
    </div>
         
  );
}

export default App;
