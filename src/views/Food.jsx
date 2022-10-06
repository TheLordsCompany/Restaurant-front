import React from 'react'






 function Food(props) {
  
   
  return (
    <div>FOOD

        <h2>Hello</h2>
        <button onClick={props.closeModal}>close</button>
        <div>{props.elem.name}</div>
     
      
    </div>
  )
}
export default Food;