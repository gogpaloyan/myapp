import React, { useState } from 'react';
import {Route, Routes } from 'react-router-dom';
import './App.css';
import Max from './features/component/main/about/max/Max';

import Navbar from './features/component/navbar/Navbar';
import Toogle from './features/component/toogle/Toggle';





function App() {

  const [value, setValue] = useState(true)
  const VideoPlayer = React.lazy(() => import('./features/component/main/memo/VideoPlayer'))
  const Register = React.lazy( () => import('./features/component/main/about/Register'))
  const Contact = React.lazy( () => import('./features/component/main/contact/Contact'))
  const TodoApp = React.lazy(() => import('./features/todo/TodoApp'))
  
  return (

    <div className={value ? "App" : "app"}>

 
             
    <Navbar value={value}  setValue={setValue}/>
      <div>
    <Routes >
      <Route path='/' element={<React.Suspense fallback="loading"><Contact value={value}/></React.Suspense>} />
      <Route path='posts' element={<React.Suspense fallback="loading"><Register value={value}/></React.Suspense>} />
      <Route path='element'  element={<React.Suspense fallback="loading"><TodoApp value={value}/></React.Suspense> } />
      <Route path='max'  element={<Max/>}/>
      <Route path='memo'  element={<React.Suspense fallback="loading"><VideoPlayer/></React.Suspense>}/>
    </Routes>
       

      
    </div>
   <div onClick={()=> setValue(!value)} className="toogle"><Toogle value={value}/>    </div>
    </div>
         
  );
}

export default App;
