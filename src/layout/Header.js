import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import iconFacebook from '../assets/images/Icon FB.svg'
import {IoLogoInstagram} from 'react-icons/io'
function Header(props) {
  let navigate = useNavigate();
  let location=useLocation()
  let path=location.pathname
  return (
    <div className="spaceBetween headerApp "style={props.scrollY>=50||path==='/gallery'?{backgroundColor:'black'}:{}}>
      <div className="containerMenu center">
        <button
          className="menu signika white"
          
          onClick={() => {
            navigate("/about");
          }}
        >
          ABOUT
        </button>
        <button
          className="menu signika white"
         
          onClick={() => {
            navigate("/menu");
          }}
        >
          MENU
        </button>
        <button
            className="menu signika white"
            
          onClick={() => {
            navigate("/gallery");
          }}
        >
          GALLERY
        </button>
        <button
        className="menu signika white"
        
          onClick={() => {
            navigate("/contact");
          }}
        >
          CONTACT
        </button>
      </div>
      <div
        onClick={() => {
          navigate("/");
        }}
      >
        logo
      </div>
      <div className="containerMenu center">
        <button
            className="menu signika white"
            
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
