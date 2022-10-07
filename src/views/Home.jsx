import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";

let array=[
  "https://res.cloudinary.com/dova8kprm/image/upload/v1665144632/ir3jtmcoonw2ce0omlzg.jpg?fbclid=IwAR1XFo29oTwQCjdg5hqXN2rvGiIoGjHQGkdtwoCufzFm7szNxb5_G8CENhQ",
  "https://res.cloudinary.com/dova8kprm/image/upload/v1665141708/sff7ytcwvstop6w59net.jpg?fbclid=IwAR0flM-wG-hyXzRttotY3CCNbDza57NQ2A57RCioZ90g0n857s5yfJ4MXQ4",
  "https://res.cloudinary.com/dova8kprm/image/upload/v1665141855/wvafjjvfy8th7dpwgyli.jpg?fbclid=IwAR3mTFbMuEfk_qtyoSjI0IEZPc4SGHUx_niX63RU-RSngtu27tZ4QT0kIPM",
  "https://res.cloudinary.com/dova8kprm/image/upload/v1665141971/jnzvt9sqsgvdanngmig8.jpg?fbclid=IwAR1p8lMz5kbS_BXjE3vhhvYpHPIER1GS-xiK1uMKCqFCRKOK0xlrwHSuFrc"
]
function Home() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div>
      <Carousel
        pause={false}
        indicators={false}
        controls={false}
        interval={4000}
      >
        {array.map((elem,i)=>(

        <Carousel.Item key={i}>
          <div className="homeCarousel" style={{backgroundImage:`url(${elem})`}}></div>
        </Carousel.Item>
        ))}
        </Carousel>
    </div>
  );
}

export default Home;
