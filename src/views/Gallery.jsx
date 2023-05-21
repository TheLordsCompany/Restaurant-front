import React,{useEffect} from 'react'

import Header from "../layout/Header";

function Gallery() {

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
          <div className='imageZone' id='pic1' style={{ borderRadius: 5, margin: 10, height: 360, width: 540, backgroundImage: `url("${process.env.PUBLIC_URL}/assets/images/qrMenu/MAMMA MIA/PESTO PASTA.jpg")` }}></div>
          <div className='imageZone' id='pic1' style={{ borderRadius: 5, margin: 10, height: 360, width: 540, backgroundImage: `url("${process.env.PUBLIC_URL}/assets/images/qrMenu/MAMMA MIA/PESTO PASTA.jpg")` }}></div>
          <div className='imageZone' id='pic1' style={{ borderRadius: 5, margin: 10, height: 360, width: 540, backgroundImage:`url("${process.env.PUBLIC_URL}/assets/images/qrMenu/MAMMA MIA/PESTO PASTA.jpg")` }}></div>
          <div className='imageZone' id='pic1' style={{ borderRadius: 5, margin: 10, height: 360, width: 540, backgroundImage: `url("${process.env.PUBLIC_URL}/assets/images/qrMenu/MAMMA MIA/PESTO PASTA.jpg")`}}></div>
          <div className='imageZone' id='pic2' style={{ borderRadius: 5, margin: 10, height: 360, width: 748, backgroundImage: `url("${process.env.PUBLIC_URL}/assets/images/qrMenu/MAMMA MIA/PESTO PASTA.jpg")`}}>
          <img src={`${process.env.PUBLIC_URL}/assets/images/qrMenu/MAMMA MIA/PESTO PASTA.jpg)`} 
          // onLoad={()=>setValue(5)}
           alt='' className='onLoadPic'/>
          </div>
          <div className='imageZone' id='pic3' style={{ borderRadius: 5, margin: 10, height: 360, width: 322, backgroundImage: `url("${process.env.PUBLIC_URL}/assets/images/qrMenu/AFREEN SIGNATURE MOCKTAILS/I GOT HOT SAUCE!.jpg")` }}></div>
          <div className='imageZone' id='pic1' style={{ borderRadius: 5, margin: 10, height: 360, width: 540, backgroundImage: `url("${process.env.PUBLIC_URL}/assets/images/qrMenu/MAMMA MIA/PESTO PASTA.jpg")` }}></div>
          <div className='imageZone' id='pic1' style={{ borderRadius: 5, margin: 10, height: 360, width: 540, backgroundImage: `url("${process.env.PUBLIC_URL}/assets/images/qrMenu/MAMMA MIA/PESTO PASTA.jpg")` }}></div>
          <div className='imageZone' id='pic1' style={{ borderRadius: 5, margin: 10, height: 360, width: 540, backgroundImage: `url("${process.env.PUBLIC_URL}/assets/images/qrMenu/MAMMA MIA/PESTO PASTA.jpg")` }}></div>
          <div className='imageZone' id='pic1' style={{ borderRadius: 5, margin: 10, height: 360, width: 540, backgroundImage: `url("${process.env.PUBLIC_URL}/assets/images/qrMenu/MAMMA MIA/PESTO PASTA.jpg")` }}></div>
          <div className='imageZone' id='pic4' style={{ borderRadius: 5, margin: 10, height: 375, width: 561, backgroundImage: `url("${process.env.PUBLIC_URL}/assets/images/qrMenu/MAMMA MIA/PESTO PASTA.jpg")` }}></div>
          <div className='imageZone' id='pic5' style={{ borderRadius: 5, margin: 10, height: 375, width: 250, backgroundImage: `url("${process.env.PUBLIC_URL}/assets/images/qrMenu/AFREEN SIGNATURE MOCKTAILS/I GOT HOT SAUCE!.jpg")` }}></div>
          <div className='imageZone' id='pic5' style={{ borderRadius: 5, margin: 10, height: 375, width: 250, backgroundImage: `url("${process.env.PUBLIC_URL}/assets/images/qrMenu/AFREEN SIGNATURE MOCKTAILS/I GOT HOT SAUCE!.jpg")` }}></div>
          <div className='imageZone' id='pic4' style={{ borderRadius: 5, margin: 10, height: 499, width: 748, backgroundImage: `url("${process.env.PUBLIC_URL}/assets/images/qrMenu/MAMMA MIA/PESTO PASTA.jpg")` }}></div>
          <div className='imageZone' id='pic3' style={{ borderRadius: 5, margin: 10, height: 499, width: 332, backgroundImage: `url("${process.env.PUBLIC_URL}/assets/images/qrMenu/AFREEN SIGNATURE MOCKTAILS/I GOT HOT SAUCE!.jpg")` }}></div>
          <div className='imageZone' id='pic2' style={{ borderRadius: 5, margin: 10, height: 360, width: 540, backgroundImage: `url("${process.env.PUBLIC_URL}/assets/images/qrMenu/MAMMA MIA/PESTO PASTA.jpg")` }}></div>
          <div className='imageZone' id='pic2' style={{ borderRadius: 5, margin: 10, height: 360, width: 540, backgroundImage: `url("${process.env.PUBLIC_URL}/assets/images/qrMenu/MAMMA MIA/PESTO PASTA.jpg")` }}></div>
          <div className='imageZone' id='pic3' style={{ borderRadius: 5, margin: 10, height: 499, width: 333, backgroundImage: `url("${process.env.PUBLIC_URL}/assets/images/qrMenu/AFREEN SIGNATURE MOCKTAILS/I GOT HOT SAUCE!.jpg")` }}></div>
          <div className='imageZone' id="pic4" style={{ borderRadius: 5, margin: 10, height: 499, width: 747, backgroundImage: `url("${process.env.PUBLIC_URL}/assets/images/qrMenu/MAMMA MIA/PESTO PASTA.jpg")` }}></div>
          <div className='imageZone' id='pic4' style={{ borderRadius: 5, margin: 10, height: 734, width: 1100, backgroundImage: `url("${process.env.PUBLIC_URL}/assets/images/qrMenu/MAMMA MIA/PESTO PASTA.jpg")` }}></div>
        </div>
      </div>
      <Header />
      {/* {value < 4 && <Loading/> }  */}
    </div>
  )
}

export default Gallery