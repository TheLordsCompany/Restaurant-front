import React from "react";
import { useNavigate } from "react-router-dom";
function Header() {
  let navigate = useNavigate();
  return (
    <div className="spaceBetween">
      <div className="containerMenu center">
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
            navigate("/menu");
          }}
          className="menu"
        >
          MENU
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
            navigate("/contact");
          }}
          className="menu"
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
          onClick={() => {
            navigate("/reservation");
          }}
          className="menu"
        >
          RESERVATION
        </button>
        <button className="menu order">ORDER ONLINE</button>
      </div>
    </div>
  );
}

export default Header;
