import React, { useEffect, useState } from "react";
import menu from "../constants/qrMenu";

import Header from "../layout/Header";
// import Loading from "../components/Loading";
import GridViewIcon from "@mui/icons-material/GridView";
import { GiHamburgerMenu } from "react-icons/gi";

function QrMenu() {
  const [value, setValue] = useState(0);
  const [selected, setSelected] = useState(menu[0]);
  const [subMenu, setSubMenu] = useState(menu[0].elems);
  const [view, setView] = useState(1);
  const [index,setIndex]=useState(0)
  console.log(value);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div  className='qrmenu'>
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
                src={process.env.PUBLIC_URL+'/assets/images/qrmenu/'+elem.category+'/'+elem.category+'.jpg'}
                alt=""
                className="menuPic"
                onLoad={() => setValue(i + 1)}
              />
              <h6  className="bebas">{elem.category} </h6>
            </div>
          ))}
        </div>
        <div className="spaceBetween margin">
          <div className="margin center">
            <h4 className="bebas">{selected.category}</h4>
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
          <div className="margin row wrap">
            {subMenu.map((elem, i) => (
              <div className="cardMenu">
                

                <img src={process.env.PUBLIC_URL+'/assets/images/qrmenu/'+selected.category+'/'+elem.name+'.jpg'} alt="" className="cardMenuPic" />
               
                <h6 className="titleCard bebas">{elem.name}</h6>
                <p className="discrptionCard shadows">{"test description"}</p>
                <button className="cardMenuPrice textCenter spaceBetween white">
                  <p>{elem.price}</p>
                  <p>SA</p>
                </button>
              </div>
            ))}
          </div>
        )}
        {view === 2 && (
          <div className=" margin center">
            <div style={{width:'90%'}}>
            {subMenu.map((elem, i) => (
              <div className="spaceBetween margin "   >
                <div className="qrMenuVeiw2ZoneText">
                  <h6  className="titleCard bebas">{elem.name}</h6>
                  <p className="discrptionCard shadows">{elem.description}</p>
                  <button className="cardMenuPrice textCenter spaceBetween white">
                    <p>{elem.price}</p>
                    <p>SA</p>
                  </button>
                </div>
                <div className='Center' style={{height:100,width:150}}>
                <img src={process.env.PUBLIC_URL+'/assets/images/qrmenu/'+selected.category+'/'+elem.name+'.jpg'} alt="" className="cardMenuPic" />
                </div>
              </div>
            ))}
            </div>
          </div>
        )}
      </div>

      <Header />
      {/* {value < 4 && <Loading />} */}
    </div>
  );
}

export default QrMenu;
