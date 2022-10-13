import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import Header from "../layout/Header";
import pic1 from '../assets/images/1.jpg'
import pic2 from '../assets/images/3.jpg'
import pic3 from '../assets/images/27.jpg'
import pic4 from '../assets/images/29.jpg'
import picMobile1 from '../assets/images/25.jpg'
import picMobile2 from '../assets/images/21.jpg'
import picMobile3 from '../assets/images/11.jpg'
import picMobile4 from '../assets/images/16.jpg'
import Loading from "../components/Loading";



let array = [
  {
    pic: pic1,
    picMobile: picMobile1
  },
  {
    pic: pic2,
    picMobile: picMobile2
  },
  {
    pic: pic3,
    picMobile: picMobile3
  },
  {
    pic: pic4,
    picMobile: picMobile4
  }

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

        indicators={false}
        controls={false}
        interval={4000}
        fade={true}

      >

        {array.map((elem, i) => {

          return (
            <Carousel.Item key={i}>
              <Header />
              <div
                className="homeCarousel"
                id={`carousel${i}`}
                
                onLoad={() => console.log('loading')}
              >
                <img src={elem.pic} style={{ height: 0, width: 0 }} alt='' />
                <img src={elem.picMobile} style={{ height: 0, width: 0 }} alt='' onLoad={() => setValue(i + 1)} />
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>

      {value < 4 && <Loading />}
      <Header />
    </div>
  );
}

export default Home;
