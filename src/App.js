import React, { useEffect } from 'react'
import Router from './router/Router'
import './styles/style.css'
import './App.css'
import './styles/mediaScreen.css'
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {
useEffect(()=>{
 
  AOS.init();
},[])
  return (
    <div className='app'><Router/></div>
  )
}

export default App