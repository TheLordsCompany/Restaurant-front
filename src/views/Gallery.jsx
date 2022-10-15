import React,{useEffect,useState} from 'react'
import Loading from '../components/Loading';
import Header from "../layout/Header";

function Gallery() {
 const [value,setValue]=useState(0)
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div> 
      <div className='Center instagramName' style={{height:400,alignItems:'end'}} >
        <div data-aos="flip-left" data-aos-duration="1700">
          <p className='orange meduim bold textCenter'>FOLLOW ALONG</p>
          <p className='great xlarger bolder pointer' style={{marginTop:10}} onClick={()=>window.location.assign("https://www.instagram.com/afreencafe/")}>
            @afreenlounge
          </p>
        </div>
      </div>
      <div className='Center'>
        <div className='picturesZone row wrap '>
          <div className='imageZone' id='pic1' style={{ borderRadius: 5, margin: 10, height: 360, width: 540, backgroundImage: "url('https://infisure.co.nz/indianlounge/wp-content/uploads/2022/09/IndianLounge-09August2022-1-768x512.jpg')" }}></div>
          <div className='imageZone' id='pic1' style={{ borderRadius: 5, margin: 10, height: 360, width: 540, backgroundImage: "url('https://infisure.co.nz/indianlounge/wp-content/uploads/2022/09/IndianLounge-09August2022-6-768x512.jpg')" }}></div>
          <div className='imageZone' id='pic1' style={{ borderRadius: 5, margin: 10, height: 360, width: 540, backgroundImage: "url('https://infisure.co.nz/indianlounge/wp-content/uploads/2022/09/IndianLounge-09August2022-16-768x512.jpg')" }}></div>
          <div className='imageZone' id='pic1' style={{ borderRadius: 5, margin: 10, height: 360, width: 540, backgroundImage: "url('https://infisure.co.nz/indianlounge/wp-content/uploads/2022/09/IndianLounge-09August2022-17-768x512.jpg')" }}></div>
          <div className='imageZone' id='pic2' style={{ borderRadius: 5, margin: 10, height: 360, width: 748, backgroundImage: "url('https://infisure.co.nz/indianlounge/wp-content/uploads/2022/09/IndianLounge-09August2022-18-768x512.jpg')" }}>
          <img src='https://infisure.co.nz/indianlounge/wp-content/uploads/2022/09/IndianLounge-09August2022-18-768x512.jpg' onLoad={()=>setValue(5)} alt='' className='onLoadPic'/>
          </div>
          <div className='imageZone' id='pic3' style={{ borderRadius: 5, margin: 10, height: 360, width: 322, backgroundImage: "url('https://infisure.co.nz/indianlounge/wp-content/uploads/2022/09/IndianLounge-09August2022-21-768x1152.jpg')" }}></div>
          <div className='imageZone' id='pic1' style={{ borderRadius: 5, margin: 10, height: 360, width: 540, backgroundImage: "url('https://infisure.co.nz/indianlounge/wp-content/uploads/2022/09/IndianLounge-09August2022-22-768x512.jpg')" }}></div>
          <div className='imageZone' id='pic1' style={{ borderRadius: 5, margin: 10, height: 360, width: 540, backgroundImage: "url('https://infisure.co.nz/indianlounge/wp-content/uploads/2022/09/IndianLounge-09August2022-24-768x512.jpg')" }}></div>
          <div className='imageZone' id='pic1' style={{ borderRadius: 5, margin: 10, height: 360, width: 540, backgroundImage: "url('https://infisure.co.nz/indianlounge/wp-content/uploads/2022/09/IndianLounge-09August2022-28-768x512.jpg')" }}></div>
          <div className='imageZone' id='pic1' style={{ borderRadius: 5, margin: 10, height: 360, width: 540, backgroundImage: "url('https://infisure.co.nz/indianlounge/wp-content/uploads/2022/09/IndianLounge-09August2022-33-768x512.jpg')" }}></div>
          <div className='imageZone' id='pic4' style={{ borderRadius: 5, margin: 10, height: 375, width: 561, backgroundImage: "url('https://infisure.co.nz/indianlounge/wp-content/uploads/2022/09/IndianLounge-09August2022-39-768x513.jpg')" }}></div>
          <div className='imageZone' id='pic5' style={{ borderRadius: 5, margin: 10, height: 375, width: 250, backgroundImage: "url('https://infisure.co.nz/indianlounge/wp-content/uploads/2022/09/IndianLounge-09August2022-45-768x1152.jpg')" }}></div>
          <div className='imageZone' id='pic5' style={{ borderRadius: 5, margin: 10, height: 375, width: 250, backgroundImage: "url('https://infisure.co.nz/indianlounge/wp-content/uploads/2022/09/IndianLounge-09August2022-49.jpg')" }}></div>
          <div className='imageZone' id='pic4' style={{ borderRadius: 5, margin: 10, height: 499, width: 748, backgroundImage: "url('https://infisure.co.nz/indianlounge/wp-content/uploads/2022/09/IndianLounge-09August2022-53-768x512.jpg')" }}></div>
          <div className='imageZone' id='pic3' style={{ borderRadius: 5, margin: 10, height: 499, width: 332, backgroundImage: "url('https://infisure.co.nz/indianlounge/wp-content/uploads/2022/09/IndianLounge-09August2022-56-768x1152.jpg')" }}></div>
          <div className='imageZone' id='pic2' style={{ borderRadius: 5, margin: 10, height: 360, width: 540, backgroundImage: "url('https://infisure.co.nz/indianlounge/wp-content/uploads/2022/09/IndianLounge-09August2022-66-768x512.jpg')" }}></div>
          <div className='imageZone' id='pic2' style={{ borderRadius: 5, margin: 10, height: 360, width: 540, backgroundImage: "url('https://infisure.co.nz/indianlounge/wp-content/uploads/2022/09/IndianLounge-09August2022-70-768x512.jpg')" }}></div>
          <div className='imageZone' id='pic3' style={{ borderRadius: 5, margin: 10, height: 499, width: 333, backgroundImage: "url('https://infisure.co.nz/indianlounge/wp-content/uploads/2022/09/IndianLounge-09August2022-77-768x1151.jpg')" }}></div>
          <div className='imageZone' id="pic4" style={{ borderRadius: 5, margin: 10, height: 499, width: 747, backgroundImage: "url('https://infisure.co.nz/indianlounge/wp-content/uploads/2022/09/IndianLounge-09August2022-87.jpg')" }}></div>
          <div className='imageZone' id='pic4' style={{ borderRadius: 5, margin: 10, height: 734, width: 1100, backgroundImage: "url('https://infisure.co.nz/indianlounge/wp-content/uploads/2022/09/IndianLounge-09August2022-111-768x512.jpg')" }}></div>
        </div>
      </div>
      <Header />
      {value < 4 && <Loading/> } 
    </div>
  )
}

export default Gallery