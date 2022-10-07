import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Modal from 'react-modal';
import Food from '../components/Food';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');
function Category() {
  const [elem, setElem] = useState({})
  const location = useLocation();
  const data = location.state;

  const [modalIsOpen, setIsOpen] = React.useState(false);

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div >
      <div className='center headerPage' style={{ backgroundImage: 'url("https://infisure.co.nz/indianlounge/wp-content/uploads/2022/09/IndianLounge-09August2022-16-min-scaled.jpg")' }}>
        <div className='headerOpacity center'>
          <h1 className='signika xlarger' >food</h1>
        </div>
      </div>
      <div className='center'>
        <div className='container spaceBetween'>
          <div className='container500'>
            <h2 className='archivo blod orange'>{data.name}</h2>
            {data.elems.map((elem, i) => (
              <div key={i} elem={elem} onClick={() => {
                //   nav("/category", { state:elem});
                setElem(elem)
                openModal()
              }} > {elem.name}  </div>
            ))}


          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}

        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      ><Food elem={elem} closeModal={closeModal} /></Modal>
    </div>
  )
}

export default Category