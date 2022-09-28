import React from 'react'
import MenuElement from '../components/MenuElement'
import quickNibbles from '../constants/quickNibbles'
import snacksAndLitesVeg from '../constants/snacksAndLitesVeg'
import snacksAndLitesNonVeg from '../constants/snacksAndLitesNonVeg'
import biryanis from '../constants/biryanis'
import sidesAndSalads from '../constants/sidesAndSalads'
import desserts from '../constants/desserts'
import mainsNonVeg from '../constants/mainsNonVeg'
import mainsSeafoud from '../constants/mainsSeafoud'
import mainsVegetarian from '../constants/mainsVegetarian'
import naanBreads from '../constants/naanBreads'


function Menu() {
  return (
    <div>
      <div className='center'>
        <h1>Our Menu</h1>
      </div>
      <div className='container Center'>
        <div className='container500'>
          <h2>QUICK NIBBLES</h2>
          {quickNibbles.map((elem, i) => (
            <MenuElement key={i} elem={elem} />
          ))}
          <h2>{'SNACKS AND LITES (VEG)'}</h2>
          {snacksAndLitesVeg.map((elem, i) => (
            <MenuElement key={i} elem={elem} />
          ))}
          <h2>{'SNACKS AND LITES (NON VEG)'}</h2>
          {snacksAndLitesNonVeg.map((elem, i) => (
            <MenuElement key={i} elem={elem} />
          ))}
          <h2>{'BIRYANIS'}</h2>
          {biryanis.map((elem, i) => (
            <MenuElement key={i} elem={elem} />
          ))}
          <h2>{'SIDES & SALADS'}</h2>
          {sidesAndSalads.map((elem, i) => (
            <MenuElement key={i} elem={elem} />
          ))}
          <h2>{'DESSERTS'}</h2>
          {desserts.map((elem, i) => (
            <MenuElement key={i} elem={elem} />
          ))}
        </div>
        <div className='container500'>
          <h2>{'MAINS (NON-VEG)'}</h2>
          {mainsNonVeg.map((elem,i)=>(
            <MenuElement key={i} elem={elem}/>
          ))}
          <h2>{'MAINS SEAFOOD'}</h2>
          {mainsSeafoud.map((elem,i)=>(
            <MenuElement key={i} elem={elem}/>
          ))}
          <h2>{'MAINS(VEGETARIAN)'}</h2>
          {mainsVegetarian.map((elem,i)=>(
            <MenuElement key={i} elem={elem}/>
          ))}
          <h2>{'NAAN BREADS'}</h2>
          {naanBreads.map((elem,i)=>(
            <MenuElement key={i} elem={elem}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Menu