import React from 'react'

function MenuElement({ elem }) {
    return (
        <div className=''>
            <div className='spaceBetween'>
                <h3>{elem.title}</h3>
                <p >{elem.price}</p>
            </div>
            {elem.description && <p className='lighter small'>{elem.description}</p>}
        </div>
    )
}

export default MenuElement