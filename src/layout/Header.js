import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import iconFacebook from '../assets/images/Icon FB.svg'
import {IoLogoInstagram} from 'react-icons/io'
import logo from "../Afreen_logo_inverted.png";

function Header(props) {
  let navigate = useNavigate();
  let location=useLocation()
  let path=location.pathname
  return (
    <div className="spaceBetween headerApp "style={props.scrollY>=100||path==='/gallery'?{backgroundColor:'black'}:{}}>
      <div className="containerMenu center">
        <button
          className={path=="/about"?" orange menu signika ":"menu signika white"}
          
          onClick={() => {
            navigate("/about");
          }}
        >
          ABOUT
        </button>
        <button
         className={path=="/menu"?" orange menu signika ":"menu signika white"}
         
          onClick={() => {
            navigate("/menu");
          }}
        >
          MENU
        </button>
        <button
          className={path=="/gallery"?" orange menu signika ":"menu signika white"}
            
          onClick={() => {
            navigate("/gallery");
          }}
        >
          GALLERY
        </button>
        <button
        className={path=="/contact"?" orange menu signika ":"menu signika white"}
        
          onClick={() => {
            navigate("/contact");
          }}
        >
          CONTACT
        </button>
      </div>
      <div className="Center"
        onClick={() => {
          navigate("/");
        }}
        style={{width:100}}
      >
         <img className="image" src={logo} alt="logo" style={{height:200,marginTop:-20}} />
      
      </div>
      <div className="containerMenu center">
        <button
          className={path=="/reservation"?" orange menu signika ":"menu signika white"}
            
          onClick={() => {
            navigate("/reservation");
          }}
        >
          RESERVATION
        </button>
        <button className="menu order signika">ORDER ONLINE</button>
        <img src={iconFacebook} className='icon'/>
        <IoLogoInstagram height={30}/>
        
      </div>
    </div>
  );
}

export default Header;
