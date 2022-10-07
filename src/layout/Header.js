import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import iconFacebook from "../assets/images/Icon FB.svg";
import { IoLogoInstagram } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../Afreen_logo_inverted.png";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineClose } from "react-icons/ai";

function Header(props) {
  let navigate = useNavigate();
  let location = useLocation();
  let path = location.pathname;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div
      className=" headerApp center"
      style={
        props.scrollY >= 100 || path === "/gallery"
          ? { backgroundColor: "black" }
          : {}
      }
    >
      <div className="header spaceBetween">
        <div className="leftHeader center ">
          <img className="image" src={logo} alt="logo" />
          <div className="containerMenu center ">
            <button
              className={
                path == "/about"
                  ? " orange menu signika "
                  : "menu signika white"
              }
              onClick={() => {
                navigate("/about");
              }}
            >
              ABOUT
            </button>
            <button
              className={
                path == "/menu" ? " orange menu signika " : "menu signika white"
              }
              onClick={() => {
                navigate("/menu");
              }}
            >
              MENU
            </button>
            <button
              className={
                path == "/gallery"
                  ? " orange menu signika "
                  : "menu signika white"
              }
              onClick={() => {
                navigate("/gallery");
              }}
            >
              GALLERY
            </button>
            <button
              className={
                path == "/contact"
                  ? " orange menu signika "
                  : "menu signika white"
              }
              onClick={() => {
                navigate("/contact");
              }}
            >
              CONTACT
            </button>
          </div>
        </div>

        <div className="middleHeader center">
          <div
            className="Center"
            onClick={() => {
              navigate("/");
            }}
            // style={{ width: 100 }}
          >
            <img
              className="image"
              src={logo}
              alt="logo"
              style={{ height: 200, marginTop: -20 }}
            />
          </div>
        </div>
        <div className="rightHeader center">
          <div className="containerMenu center ">
            <button
              className={
                path == "/qrmenu"
                  ? "  menu signika order "
                  : "menu signika order white"
              }
              onClick={() => {
                navigate("/qrmenu");
              }}
            >
              QR MENU
            </button>
            <button className="menu  white signika" style={{ width: 150 }}>
              ORDER ONLINE
            </button>
            <img src={iconFacebook} className="icon" />
            <IoLogoInstagram height={30} />
          </div>
          <div className="image center ">
            <button
              className={
                path == "/qrmenu"
                  ? "  menu signika order "
                  : "menu signika order white"
              }
              onClick={() => {
                navigate("/qrmenu");
              }}
            >
              QR MENU
            </button>
            <GiHamburgerMenu
              size={40}
              onClick={handleShow}
              className="pointer"
            />
          </div>
          <Offcanvas
            className="offcanvamenu"
            show={show}
            onHide={handleClose}
            placement="end"
            backdropClassName="offcanvamenu"
          >
            <Offcanvas.Header className="white">
              <img className="image" src={logo} />
              <AiOutlineClose
                size={30}
                onClick={handleClose}
                className="pointer"
              />
            </Offcanvas.Header>
            <Offcanvas.Body className="column">
              <button
                className={
                  path == "/about"
                    ? " orange menu signika "
                    : "menu signika white"
                }
                onClick={() => {
                  navigate("/about");
                  handleClose();
                }}
              >
                ABOUT
              </button>
              <button
                className={
                  path == "/menu"
                    ? " orange menu signika "
                    : "menu signika white"
                }
                onClick={() => {
                  navigate("/menu");
                  handleClose();
                }}
              >
                MENU
              </button>
              <button
                className={
                  path == "/gallery"
                    ? " orange menu signika "
                    : "menu signika white"
                }
                onClick={() => {
                  navigate("/gallery");
                  handleClose();
                }}
              >
                GALLERY
              </button>
              <button
                className={
                  path == "/contact"
                    ? " orange menu signika "
                    : "menu signika white"
                }
                onClick={() => {
                  navigate("/contact");
                  handleClose();
                }}
              >
                CONTACT
              </button>
              <div className="center">
                <button
                  className={
                    path == "/qrmenu"
                      ? "  menu order signika "
                      : "menu order signika white"
                  }
                  onClick={() => {
                    navigate("/qrmenu");
                    handleClose();
                  }}
                >
                  QR MENU
                </button>
              </div>
              <div className="center">
                <button className="menu white signika">ORDER ONLINE</button>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </div>
  );
}

export default Header;
