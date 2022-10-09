import React from "react";
import { Outlet, useLocation  } from "react-router-dom";
import Footer from "../layout/Footer";


function Main() {
  var location = useLocation();
  const noFooter = location.pathname === "/";


  return (
    <div>
      <Outlet />
      {!noFooter && <Footer />}
      
    </div>
  );
}

export default Main;
