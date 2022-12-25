import React,{useEffect,useState} from 'react'
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
import Header from "../layout/Header";


function Menu() {
  const [value, setValue] = useState(0);
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div >
      
      <div  className='center headerPage' style={{ backgroundImage: 'url("https://infisure.co.nz/indianlounge/wp-content/uploads/2022/09/IndianLounge-09August2022-16-min-scaled.jpg")' }}>
        <div className='headerOpacity center'>
          <h1 className='great xlarger' >Our Menu</h1>
        </div>
      </div>
      <img src='https://infisure.co.nz/indianlounge/wp-content/uploads/2022/09/IndianLounge-09August2022-16-min-scaled.jpg' onLoad={()=>setValue(5)} alt='' className='onLoadPic'/>

      <div className='center'>
      <div className='container spaceBetween'>
        <div className='container500'>
          <h2 className='archivo blod orange'>CHORBA</h2>
          {quickNibbles.map((elem, i) => (
            <MenuElement key={i} elem={elem} />
          ))}
          <h2 className='archivo blod orange'>GREENS</h2>
          {snacksAndLitesVeg.map((elem, i) => (
            <MenuElement key={i} elem={elem} />
          ))}
          <h2 className='archivo blod orange'>APPETIZERS</h2>
          {snacksAndLitesNonVeg.map((elem, i) => (
            <MenuElement key={i} elem={elem} />
          ))}
          <h2 className='archivo blod orange'>FINGER BITES</h2>
          {biryanis.map((elem, i) => (
            <MenuElement key={i} elem={elem} />
          ))}
          <h2 className='archivo blod orange'>AROUND THE WORLD</h2>
          {sidesAndSalads.map((elem, i) => (
            <MenuElement key={i} elem={elem} />
          ))}
        </div>
        <div className='container500'>
          <h2 className='archivo blod orange'>DESI FLAVOURS</h2>
          {mainsNonVeg.map((elem,i)=>(
            <MenuElement key={i} elem={elem}/>
            ))}
          <h2 className='archivo blod orange'>TANDOOR SPECIAL GRILL WITH LOVE</h2>
          {mainsSeafoud.map((elem,i)=>(
            <MenuElement key={i} elem={elem}/>
          ))}
          <h2 className='archivo blod orange'>NAAN DIRECTLY FROM TANDOOR</h2>
          {mainsVegetarian.map((elem,i)=>(
            <MenuElement key={i} elem={elem}/>
            ))}
          <h2 className='archivo blod orange'>WINTER HEATER</h2>
          {naanBreads.map((elem,i)=>(
            <MenuElement key={i} elem={elem}/>
            ))}
          <h2 className='archivo blod orange'>AFREEN SIGNATURE MOCKTAILS</h2>
          {desserts.map((elem, i) => (
            <MenuElement key={i} elem={elem} />
          ))}
        </div>
      </div>
      </div>
      {value < 4 && (
        <div className="loading center">
          {/* <h1>Loading</h1> */}
        </div>
      )}
      <Header />
    </div>
  )
}

export default Menu