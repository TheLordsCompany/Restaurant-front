import React, { useEffect, useState } from "react";
import menu from "../constants/qrMenu";
import Modal from "react-modal";
import Food from "../components/Food";
import Header from "../layout/Header";
// import Loading from "../components/Loading";
import GridViewIcon from "@mui/icons-material/GridView";
import { GiHamburgerMenu } from "react-icons/gi";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "black",
  },
};

Modal.setAppElement("#root");

function QrMenu() {
  const [value, setValue] = useState(0);
  const [selected, setSelected] = useState(menu[0]);
  const [subMenu, setSubMenu] = useState(menu[0].elems);
  const [view, setView] = useState(1);
  const [index, setIndex] = useState(0);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [elemModal, setElemModal] = useState(null);
  const [lg, setLg] = useState("en");

  console.log(value);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    let aux = localStorage.getItem("lg");
    if (aux) {
      setLg(aux);
    }
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="qrmenu">
      <button
        className="center white "
        style={{
          position: "absolute",
          top: 10,
          left: 20,
          zIndex: 2,
          background: "black",
        }}
        onClick={() => {
          if (lg === "en") {
            setLg("ar")
            localStorage.setItem('lg','ar')
          } else {
            setLg("en");
            localStorage.setItem('lg','en')
          }
        }}
      >
        <div
          className="center"
          style={{
            backgroundColor: lg === "en" ? "#ca9c5e" : "gray",
            width: 25,
            height: 30,
          }}
        >
          <p style={{ margin: 0 }}>En</p>
        </div>
        <div
          className="center"
          style={{
            backgroundColor: lg === "ar" ? "#ca9c5e" : "gray",
            width: 25,
            height: 30,
          }}
        >
          <p style={{ margin: 0 }}>Ar</p>
        </div>
      </button>

      <div className="backgroundBlack white">
        <div className="flex-container">
          {menu.map((elem, i) => (
            <div
              className=" pointer margin"
              key={i}
              onClick={() => {
                setSelected(elem);
                setSubMenu(elem.elems);
                setIndex(i);
              }}
              style={{ opacity: index === i ? 1 : 0.5 }}
            >
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/qrmenu/" +
                  elem.category +
                  "/" +
                  elem.category +
                  ".jpg"
                }
                alt=""
                className="menuPic"
                onLoad={() => setValue(i + 1)}
              />
              <h6 className="bebas">{elem.category} </h6>
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
              <div
                key={i}
                className="cardMenu"
                onClick={() => {
                  setElemModal(elem);
                  openModal();
                }}
              >
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/qrmenu/" +
                    selected.category +
                    "/" +
                    elem.name +
                    ".jpg"
                  }
                  alt=""
                  className="cardMenuPic"
                />

                <h6 className="titleCard bebas">
                  {lg === "en" ? elem.name : elem.nameAr}
                </h6>
                <p className="discrptionCard shadows">
                  {lg === "en" ? elem.description : elem.descriptionAr}
                </p>
                <button className="cardMenuPrice textCenter spaceBetween white">
                  <p>{elem.price}</p>
                  <p style={{ marginLeft: "10px" }}>SAR</p>
                </button>
              </div>
            ))}
          </div>
        )}
        {view === 2 && (
          <div className=" margin center">
            <div style={{ width: "90%" }}>
              {subMenu.map((elem, i) => (
                <div
                  key={i}
                  style={{ marginBottom: 20 }}
                  className="spaceBetween margin "
                  onClick={() => {
                    setElemModal(elem);
                    openModal();
                  }}
                >
                  <div className="qrMenuVeiw2ZoneText">
                    <h6 className="titleCard bebas">
                      {lg === "en" ? elem.name : elem.nameAr}
                    </h6>
                    <p className="discrptionCard shadows">
                      {lg === "en" ? elem.description : elem.descriptionAr}
                    </p>
                    <button className="cardMenuPrice textCenter spaceBetween white">
                      <p>{elem.price}</p>
                      <p style={{ marginLeft: "10px" }}>SAR</p>
                    </button>
                  </div>
                  <div className="Center" style={{ height: 100, width: 150 }}>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/qrmenu/" +
                        selected.category +
                        "/" +
                        elem.name +
                        ".jpg"
                      }
                      alt=""
                      className="cardMenuPic"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Food
          elem={elemModal}
          selected={selected}
          closeModal={closeModal}
          lg={lg}
        />
      </Modal>
      <Header />
      {/* {value < 4 && <Loading />} */}
    </div>
  );
}

export default QrMenu;
