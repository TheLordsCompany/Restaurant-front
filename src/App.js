import React, { useEffect } from 'react'
import Router from './router/Router'
import './styles/style.css'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..





function App() {
useEffect(()=>{
  window.document.addEventListener('readystatechange', function() { console.log("Fiered '" + document.readyState + "' after " + performance.now() + " ms"); });

  window.document.addEventListener('DOMContentLoaded', function() { console.log("Fiered DOMContentLoaded after " + performance.now() + " ms"); }, false);

  window.addEventListener('load', function() { console.log("Fiered load after " + performance.now() + " ms  UNTILL FULLY LODED"); }, true);
  AOS.init();
},[])
  return (
    <div className='app'><Router/></div>
  )
}

export default App