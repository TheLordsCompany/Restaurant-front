import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import Header from "../layout/Header";
import pic1 from '../assets/images/1.jpg'
import pic2 from '../assets/images/3.jpg'
import pic3 from '../assets/images/27.jpg'
import pic4 from '../assets/images/29.jpg'
import pic5 from '../assets/images/32.jpg'
import Loading from "../components/Loading";



let array = [
  // "https://res.cloudinary.com/dova8kprm/image/upload/v1665144632/ir3jtmcoonw2ce0omlzg.jpg?fbclid=IwAR1XFo29oTwQCjdg5hqXN2rvGiIoGjHQGkdtwoCufzFm7szNxb5_G8CENhQ",
  // "https://res.cloudinary.com/dova8kprm/image/upload/v1665141708/sff7ytcwvstop6w59net.jpg?fbclid=IwAR0flM-wG-hyXzRttotY3CCNbDza57NQ2A57RCioZ90g0n857s5yfJ4MXQ4",
  // "https://res.cloudinary.com/dova8kprm/image/upload/v1665141855/wvafjjvfy8th7dpwgyli.jpg?fbclid=IwAR3mTFbMuEfk_qtyoSjI0IEZPc4SGHUx_niX63RU-RSngtu27tZ4QT0kIPM",
  // "https://res.cloudinary.com/dova8kprm/image/upload/v1665141971/jnzvt9sqsgvdanngmig8.jpg?fbclid=IwAR1p8lMz5kbS_BXjE3vhhvYpHPIER1GS-xiK1uMKCqFCRKOK0xlrwHSuFrc",
pic1,pic2,pic3,pic4,pic5

];
function Home() {
  const [value, setValue] = useState(0);
  // const [bool, setBool] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log(value);
  return (
    <div>
      
      <Carousel
        pause={false}
        indicators={false}
        controls={false}
        interval={4000}
        
      >
        {array.map((elem, i) => {
          
          return (
            <Carousel.Item key={i}>
              <div
                className="homeCarousel"
                id={`carousel${i}`}
                style={{ backgroundImage: `url(${elem})` }}
                
              >
                <img src={elem} onLoad={()=>setValue(i+1)} style={{height:0,width:0}} alt=''/>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <Header />
      {value < 4 &&<Loading/>}
      
    </div>
  );
}

export default Home;
