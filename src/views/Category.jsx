import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Modal from "react-modal";
import Food from "../components/Food";
import Header from "../layout/Header";
import Loading from "../components/Loading";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");
function Category() {
  const [value,setValue]=useState(0)
  const [elem, setElem] = useState({});
  const location = useLocation();
  const data = location.state;

  const [modalIsOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
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
          <h1 className="signika xlarger">food</h1>
        </div>
      </div>
      <img alt="" className="onLoadPic" onLoad={()=>setValue(5)} src='https://infisure.co.nz/indianlounge/wp-content/uploads/2022/09/IndianLounge-09August2022-16-min-scaled.jpg' />
      <div className="center backgroundBlack white">
        <div className="margin">
          <h2 className="archivo blod orange textCenter">{data.name}</h2>

          <div className="center wrap">
            {data.elems.map((elem, i) => (
              <div
                key={i}
                elem={elem}
                className="cardMenu margin pointer"
                onClick={() => {
                  setElem(elem);
                  openModal();
                }}
              >
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
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Food elem={elem} closeModal={closeModal} />
      </Modal>
      <Header />
      {value < 4 && <Loading /> }
    </div>
  );
}

export default Category;
