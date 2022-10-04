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

      <div className="center column containerMenu">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="menu"
        >
          HOME
        </button>

        <button
          className="menu"
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
          className="menu"
        >
          GALLERY
        </button>

        <button
          onClick={() => {
            navigate("/reservation");
          }}
          className="menu"
        >
          RESERVATION
        </button>
        <button
          onClick={() => {
            navigate("/contact");
          }}
          className="menu"
        >
          CONTACT
        </button>
      </div>
      <div className="column containerMenu center">
        <p>© 2022 Arfeen Lounge. Powered by Stoners</p>
        <p>Privacy Policy</p>
        <p>Terms of use</p>
      </div>
    </div>
  );
}

export default Footer;
