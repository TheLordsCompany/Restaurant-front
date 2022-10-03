import React,{useState,useEffect} from "react";
import { Outlet, useLocation  } from "react-router-dom";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

function Main() {
  var location = useLocation();
  const noFooter = location.pathname === "/";
  const [scrollPosition, setPosition] = useState({ scrollX: 0, scrollY: 0 })
  useEffect(() => {
    function updatePosition() {
        setPosition({ scrollX: window.scrollX, scrollY: window.scrollY })
    }
    console.log(window.scrollX, window.scrollY);
    window.addEventListener('scroll', updatePosition)
    updatePosition()

    return () => window.removeEventListener('scroll', updatePosition)
}, [])
  return (
    <div>
      <Outlet />
      {!noFooter && <Footer />}
      <Header scrollY={scrollPosition.scrollY}/>
    </div>
  );
}

export default Main;
