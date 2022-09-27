import React from "react";
import { Outlet, useLocation  } from "react-router-dom";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

function Main() {
  var location = useLocation();
  const noFooter = location.pathname === "/";

  return (
    <div>
      <Header />
      <Outlet />
      {!noFooter && <Footer />}
    </div>
  );
}

export default Main;
