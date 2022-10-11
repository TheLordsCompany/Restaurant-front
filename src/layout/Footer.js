import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Afreen_logo.png";

function Footer() {
  let navigate = useNavigate();
  return (
    <div className="footer spaceBtween center wrap">
      <div className="containerMenu center ">
        <img className="image" src={logo} alt="logo" />
      </div>
      <hr className="line"></hr>
      <div className="center column containerMenu">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="menu black blod"
        >
          HOME
        </button>

        <button
          className="menu black blod"
          onClick={() => {
            navigate("/about");
          }}
        >
          ABOUT
        </button>

        <button
          onClick={() => {
            navigate("/gallery");
          }}
          className="menu black blod"
        >
          GALLERY
        </button>

        <button
          onClick={() => {
            navigate("/qrmenu");
          }}
          className="menu black blod"
        >
          QR MENU
        </button>
        <button
          onClick={() => {
            navigate("/contact");
          }}
          className="menu black blod"
        >
          CONTACT
        </button>
      </div>
      <hr className="line"></hr>
      <div className="column containerMenu center">
        <p className="textCenter blod">© 2022 Arfeen Lounge. Powered by<span className="orange"> Stoners</span></p>
        <p className="">Privacy Policy</p>
        <p className="">Terms of use</p>
      </div>
    </div>
  );
}

export default Footer;
