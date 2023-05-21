import React from "react";
import { Carousel } from "react-bootstrap";
import Header from "../layout/Header";
import pic1 from '../assets/images/more470/023 copy.jpg'
import pic2 from '../assets/images/more470/015 copy.jpg'
import pic3 from '../assets/images/more470/051 copy.jpg'
import pic4 from '../assets/images/more470/017 copy.jpg'
import picMobile1 from '../assets/images/less470/004 copy.jpg'
import picMobile2 from '../assets/images/less470/010 copy.jpg'
import picMobile3 from '../assets/images/less470/022 copy.jpg'
import picMobile4 from '../assets/images/less470/048 copy.jpg'


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
                // onLoad={() => console.log('loading :',i)}
              >
                <img src={elem.pic} style={{ height: 0, width: 0 }} alt='' />
                <img src={elem.picMobile} style={{ height: 0, width: 0 }} alt='' 
                // onLoad={() => setValue(i+1)}
                 />
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
      {/* {value<3  && <Loading />} */}
      <Header />
    </div>
  );
}

export default Home;
