import React, { useEffect, useState } from "react";
import menu from "../constants/qrMenu";
import { useNavigate } from "react-router-dom";
import Header from "../layout/Header";
import Loading from "../components/Loading";

function QrMenu() {
  const [value,setValue]=useState(0)
  const nav = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      <div
        className="center headerPage"
        style={{
          backgroundImage:
            'url("https://infisure.co.nz/indianlounge/wp-content/uploads/2022/09/IndianLounge-09August2022-16-min-scaled.jpg")',
        }}
      >
        <div className="headerOpacity center">
          <h1 className="signika xlarger">QR Menu</h1>
        </div>
      </div>
      <div className="center backgroundBlack white">
        <div className="margin">
          <h2 className="archivo blod orange textCenter">Catergories name</h2>
          <div className="center">
              <div className=" Center wrap">
                {menu.map((elem, i) => (
                  <div
                    className="cardMenu  pointer"
                    key={i}
                    onClick={() => {
                      nav("/category", { state: elem });
                    }}
                  >
                    <img src={elem.image} alt='' className='cardMenuPic' onLoad={()=>setValue(i+1)}/>
                    <h6>{elem.name} </h6>
                  </div>
                ))}
              </div>
          </div>
        </div>
      </div>
      <Header />
      {value<4 && <Loading />}
    </div>
  );
}

export default QrMenu;
