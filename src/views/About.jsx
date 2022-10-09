import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Header from "../layout/Header";

function About() {
  const [value,setValue] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      
      <div
        className="center headerPage"
        style={{
          backgroundImage:
            'url("https://infisure.co.nz/indianlounge/wp-content/uploads/2022/09/h1.jpg")',
        }}
      >
        <div className="headerOpacity center">
          <h1 className="signika xlarger">About Us</h1>
        </div>
      </div>
        <img src='https://infisure.co.nz/indianlounge/wp-content/uploads/2022/09/h1.jpg' onLoad={()=>setValue(5)} alt='' className='onLoadPic'/>
      <div className="center">
        <div className="container">
          <p className="textCenter orange meduim blod">MORE FLAVOR FOR LESS</p>
          <h2 className="textCenter lobster xlarger">Good food and</h2>
          <h2 className="textCenter lobster xlarger"> Great vibes</h2>
        </div>
      </div>
      <div className="Center">
        <div className="container">
          <div className="row wrap Center">
            <div className="containerImage">
              <img
                src={
                  "https://infisure.co.nz/indianlounge/wp-content/uploads/2022/09/IndianLounge-09August2022-111.jpg"
                }
                alt={"food"}
                style={{ width: "100%" }}
              />
            </div>
            <div className="container500">
              <p className="meduim blod">
                Indian Lounge is brought to you with a vision to share the
                culture,passion, and flavours of the Indian Cuisine. We draw
                influences from major food regions across the Indian
                subcontinent. The Traditional recipes used are fine tuned to the
                tastes of the 21st century, to tantalise your taste busds. A
                great meal also comes with great service, ambience and of course
                the company. At Indian Lounge we pride on Quality service and
                Quality food. It is our honour to welcome you to experience the
                warm hospitality and the flavours of India.{" "}
              </p>
              <p className="meduim blod">
                We offer home delivery and takeaway, order your{" "}
                <span className="orange">food online now.</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="center">
        <div className="wrap container Center">
          <div
            className="center card"
            style={{
              backgroundImage:
                'url("https://infisure.co.nz/indianlounge/wp-content/uploads/2022/09/8t_UJbNw-1-scaled.jpeg")',
            }}
          >
            
            <h2>Hangout.</h2>
          </div>
          <div
            className="center card"
            style={{
              backgroundImage:
                'url("https://infisure.co.nz/indianlounge/wp-content/uploads/2022/09/5B1Pub3Q-scaled.jpeg")',
            }}
          >
            
            <h2>Drinks.</h2>
          </div>
          <div
            className="center card specialCard"
            style={{
              backgroundSize: "250%",
              backgroundPositionX: -250,
              backgroundPositionY: -50,
              backgroundImage:
                'url("https://infisure.co.nz/indianlounge/wp-content/uploads/2022/09/Untitled-2.jpg")',
            }}
          >
            
            <h2>Fine Dine.</h2>
          </div>
        </div>
      </div>

      <div>
        <div className="center">
          <div>
            <p className="textCenter">FOLLOW ALONG</p>
            <h2 className="textCenter">@indianlounge</h2>
          </div>
        </div>
        <div className="">
          <div className="center">
            <div className="row wrap margin Center">
              <div
                className="imageZone"
                id="image1"
                style={{
                  borderRadius: 5,
                  margin: 10,
                  height: 375,
                  width: 561,
                  backgroundImage:
                    "url('https://infisure.co.nz/indianlounge/wp-content/uploads/2022/09/IndianLounge-09August2022-39-768x513.jpg')",
                }}
              ></div>
              <div
                className="imageZone"
                id="image2"
                style={{
                  borderRadius: 5,
                  margin: 10,
                  height: 375,
                  width: 250,
                  backgroundImage:
                    "url('https://infisure.co.nz/indianlounge/wp-content/uploads/2022/09/IndianLounge-09August2022-45-768x1152.jpg')",
                }}
              ></div>
              <div
                className="imageZone"
                id="image2"
                style={{
                  borderRadius: 5,
                  margin: 10,
                  height: 375,
                  width: 250,
                  backgroundImage:
                    "url('https://infisure.co.nz/indianlounge/wp-content/uploads/2022/09/IndianLounge-09August2022-49.jpg')",
                }}
              ></div>
            </div>
          </div>
          <div className="center ">
            <div className="row wrap margin Center">
              <div
                className="imageZone"
                id="image1"
                style={{
                  borderRadius: 5,
                  margin: 10,
                  height: 499,
                  width: 748,
                  backgroundImage:
                    "url('https://infisure.co.nz/indianlounge/wp-content/uploads/2022/09/IndianLounge-09August2022-53-768x512.jpg')",
                }}
              ></div>
              <div
                className="imageZone"
                id="image2"
                style={{
                  borderRadius: 5,
                  margin: 10,
                  height: 499,
                  width: 332,
                  backgroundImage:
                    "url('https://infisure.co.nz/indianlounge/wp-content/uploads/2022/09/IndianLounge-09August2022-56-768x1152.jpg')",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <Header />
      {value < 4 && <Loading /> }
      
    </div>
  );
}

export default About;
