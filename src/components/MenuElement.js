import React from 'react'

function MenuElement({ elem }) {
    return (
        <div className=''>
            <div className='spaceBetween'>
                <h3 className='shadows'>{elem.title}</h3>
                <p >{elem.price}</p>
            </div>
            {elem.description && <p className='lighter small bebas'>{elem.description}</p>}
        </div>
    )
}

export default MenuElement