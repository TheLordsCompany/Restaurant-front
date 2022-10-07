import React from "react";
import * as menu from "../constants/qrMenu";
import { useNavigate } from 'react-router-dom'

function QrMenu() {
  const nav = useNavigate();
  console.log(menu);
  return (


    <div >
      <div  className='center headerPage' style={{ backgroundImage: 'url("https://infisure.co.nz/indianlounge/wp-content/uploads/2022/09/IndianLounge-09August2022-16-min-scaled.jpg")' }}>
        <div className='headerOpacity center'>
          <h1 className='signika xlarger' >QR Menu</h1>
        </div>
      </div>
      <div className='center'>
      <div className='container spaceBetween'>
        <div className='container500'>
          <h2 className='archivo blod orange'>Catergories name</h2>
          {menu.map((elem, i) => (
            <div key={i} elem={elem} onClick={() => {
              nav("/category", { state:elem});
             }} >{elem.name}</div>
          ))}
         
   
        </div>
      </div>
      </div>
    </div>







    // <div>
    //   {menu.map((category, index) => {
    //     <div key={category.id}>
    //       {menu.name}hahaha
    //     </div>;
    //   })}
    // </div>
  );
}

export default QrMenu;
