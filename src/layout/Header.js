import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import iconFacebook from '../assets/images/Icon FB.svg'
import { IoLogoInstagram } from 'react-icons/io'
import { GiHamburgerMenu } from 'react-icons/gi'
import logo from "../Afreen_logo_inverted.png";
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AiOutlineClose} from 'react-icons/ai'

function Header(props) {
  let navigate = useNavigate();
  let location = useLocation()
  let path = location.pathname
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className=" headerApp center" style={props.scrollY >= 100 || path === '/gallery' ? { backgroundColor: 'black' } : {}}>
      <div className="header spaceBetween">
        <div className="leftHeader center ">
          <img className="image" src={logo} alt="logo" />
          <div className="containerMenu center ">
            <button
              className={path == "/about" ? " orange menu signika " : "menu signika white"}

              onClick={() => {
                navigate("/about");
              }}
            >
              ABOUT
            </button>
            <button
              className={path == "/menu" ? " orange menu signika " : "menu signika white"}

              onClick={() => {
                navigate("/menu");
              }}
            >
              MENU
            </button>
            <button
              className={path == "/gallery" ? " orange menu signika " : "menu signika white"}

              onClick={() => {
                navigate("/gallery");
              }}
            >
              GALLERY
            </button>
            <button
              className={path == "/contact" ? " orange menu signika " : "menu signika white"}

              onClick={() => {
                navigate("/contact");
              }}
            >
              CONTACT
            </button>
          </div>
        </div>

        <div className="middleHeader center">
          <div className="Center"
            onClick={() => {
              navigate("/");
            }}
          // style={{ width: 100 }}
          >
            <img className="image" src={logo} alt="logo" style={{ height: 200, marginTop: -20 }} />

          </div>
        </div>
        <div className="rightHeader center">

          <div className="containerMenu center ">
            <button
              className={path == "/reservation" ? " orange menu signika " : "menu signika white"}

              onClick={() => {
                navigate("/reservation");
              }}
            >
              RESERVATION
            </button>
            <button className="menu order signika">ORDER ONLINE</button>
            <img src={iconFacebook} className='icon' />
            <IoLogoInstagram height={30} />
          </div>
          <div className="image center ">
            <GiHamburgerMenu size={40} onClick={handleShow} className='pointer' />
          </div>
          <Offcanvas className='offcanvamenu' show={show} onHide={handleClose} placement='end' backdropClassName="offcanvamenu">
            <Offcanvas.Header  className="white">

             <img className="image" src={logo} />
             <AiOutlineClose size={30} onClick={handleClose} className='pointer'/>
         
            </Offcanvas.Header>
            <Offcanvas.Body className="column">
              <button
                className={path == "/about" ? " orange menu signika " : "menu signika white"}

                onClick={() => {
                  navigate("/about");
                }}
              >
                ABOUT
              </button>
              <button
                className={path == "/menu" ? " orange menu signika " : "menu signika white"}

                onClick={() => {
                  navigate("/menu");
                }}
              >
                MENU
              </button>
              <button
                className={path == "/gallery" ? " orange menu signika " : "menu signika white"}

                onClick={() => {
                  navigate("/gallery");
                }}
              >
                GALLERY
              </button>
              <button
                className={path == "/contact" ? " orange menu signika " : "menu signika white"}

                onClick={() => {
                  navigate("/contact");
                }}
              >
                CONTACT
              </button>
              <button
                className={path == "/reservation" ? " orange menu signika " : "menu signika white"}

                onClick={() => {
                  navigate("/reservation");
                }}
              >
                RESERVATION
              </button>
              <div className="center">

                <button className="menu order signika">ORDER ONLINE</button>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>


    </div>
  );
}

export default Header;
