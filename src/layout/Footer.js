import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../logo512.png";
function Footer() {
  let navigate = useNavigate();
  return (
    <div className="spaceBtween center">
      <div className="containerMenu center ">
        <img className="image" src={logo} alt="logo" />
      </div>

      <div className="center column">
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
