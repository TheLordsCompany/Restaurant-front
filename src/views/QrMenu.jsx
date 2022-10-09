import React, { useEffect, useState } from "react";
import menu from "../constants/qrMenu";

import Header from "../layout/Header";
import Loading from "../components/Loading";
import GridViewIcon from "@mui/icons-material/GridView";
import { GiHamburgerMenu } from "react-icons/gi";

function QrMenu() {
  const [value, setValue] = useState(0);
  const [selected, setSelected] = useState(menu[0]);
  const [subMenu, setSubMenu] = useState(menu[0].elems);
  const [view, setView] = useState(1);
  const [index,setIndex]=useState(0)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div  className=''>
      <div className="backgroundBlack white" >
        <div className="flex-container">
          {menu.map((elem, i) => (
            <div
              className=" pointer margin"
              key={i}
              onClick={() => {
                setSelected(elem);
                setSubMenu(elem.elems);
                setIndex(i)
              }}
              style={{opacity:index===i?1:0.5}}
            >
              
              <img
                src={elem.image}
                alt=""
                className="cardMenuPic"
                onLoad={() => setValue(i + 1)}
              />
              <h6>{elem.name} </h6>
            </div>
          ))}
        </div>
        <div className="spaceBetween">
          <div className="margin center">
            <h4>{selected.name}</h4>
          </div>
          <div className="margin">
            <GridViewIcon
              color="white"
              sx={{
                height: 30,
                width: 30,
                margin: "10px",
                opacity: view === 1 ? 1 : 0.5,
              }}
              onClick={() => setView(1)}
            />

            <GiHamburgerMenu
              size={30}
              onClick={() => setView(2)}
              style={{ opacity: view === 2 ? 1 : 0.5 }}
            />
          </div>
        </div>
        {view === 1 && (
          <div className="row wrap">
            {subMenu.map((elem, i) => (
              <div className="cardMenu">
                <img src={elem.image} alt="" className="cardMenuPic" />
                <h6>{elem.name}</h6>
                <p className="small normal">{"test description"}</p>
                <button className="cardMenuPrice textCenter spaceBetween white">
                  <p>{elem.price}</p>
                  <p>SA</p>
                </button>
              </div>
            ))}
          </div>
        )}
        {view === 2 && (
          <div className="Center wrap">
            {subMenu.map((elem, i) => (
              <div className="spaceBetween margin"  >
                <div style={{width:200}}>
                  <h6>{elem.name}</h6>
                  <p className="small normal">{"test description"}</p>
                  <button className="cardMenuPrice textCenter spaceBetween white">
                    <p>{elem.price}</p>
                    <p>SA</p>
                  </button>
                </div>
                <img src={elem.image} alt="" className="cardMenuPic" />
              </div>
            ))}
          </div>
        )}
      </div>

      <Header />
      {value < 4 && <Loading />}
    </div>
  );
}

export default QrMenu;
