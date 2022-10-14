import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
function Food(props) {
  let elem = props.elem
  return (
    <div className='backgroundBlack white ' style={{padding:10}}>
      <div className='Right'>
        <button className='btn' onClick={props.closeModal}><AiOutlineClose color='white' size={30} /></button>
      </div>
      <div>
        <h2>{elem.name}</h2>
        <div className='picPopupZone'>
          <img src={elem.image} alt='' className='popupPic' />
        </div>
        <p>
          {elem.description} 
        </p>
        <button className='cardMenuPrice white spaceBetween'>
          <p>{elem.price}</p>
          <p>SA</p>
        </button>
      </div>
    </div>
  )
}
export default Food;