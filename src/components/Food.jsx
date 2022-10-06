import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
function Food(props) {
  let elem = props.elem
  return (
    <div>
      <div className='Right'>
        <button className='btn' onClick={props.closeModal}><AiOutlineClose /></button>
      </div>
      <div>
        <h2>{elem.name}</h2>
        <div>
          <img src={elem.image} />
        </div>
        <p>
          {elem.description}
          'test description'
        </p>
      </div>
    </div>
  )
}
export default Food;