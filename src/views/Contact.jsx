import { React, useState,useEffect } from "react";
import { send } from "emailjs-com";
import Header from "../layout/Header";

function Contact() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    send("service_z2b4xuu", "template_er0aion", toSend, "npTagOFNOxgcLuTKC")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
    console.log(toSend);
  };
  return (
    <div>
    
      <div className='center headerPage' style={{ backgroundImage: 'url("https://infisure.co.nz/indianlounge/wp-content/uploads/2022/09/h3.jpg")' }}>
        <div className='headerOpacity center'>
          <div>
            <p className="textCenter">FIND US</p>
            <h1 className='signika xlarger' >Contact</h1>

          </div>
        </div>

      </div>
      <div className="Center">
        <div className="margin">

          <div className="Center wrap  ">
            <div className="container500">
              <p className="newsreader blod large">Contact</p>
              <h6 className="orange">510 Mount Eden Road, Mount Eden, Auckland 1024</h6>
            </div>
            <div className="container300" style={{ marginTop: 40 }}>
              <h3 className="newsreader semiLarge"><span className="dancing">T:</span> 011 214 0255</h3>
              <h3 className="newsreader semiLarge"><span className="dancing">E:</span> info@indianlounge.co.nz</h3>
            </div>
          </div>
          <div className="Center row">
            <div className="container500">
              <h2 className="newsreader blod large">Follow Us</h2>
              <h6 className="orange">Facebook</h6>
              <h6 className="orange">Instagram</h6>
              <h6 className="orange">TripAdvisor</h6>
            </div>
            <div className="container300">
              <h2 className="newsreader blod large">Opening Hours</h2>
              <div className=" wrap ">
                <div className="margin">
                  
                  <h6 className="dancing semiLarge blod">Sunday to Wednesday </h6>
                  <h6 className="orange">2:00pm - 1:00am</h6>
                </div>
                <div className="margin">
                  
                  <h6 className="dancing semiLarge blod">Thursday to Saturday</h6>
                  <h6 className="orange ">1:30pm - 2:0am</h6>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
      <div><iframe title="iframe" width={'100%'} height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=afreen%20riyad&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe></div>
      <div className="center">
        <div className="spaceBetween wrap ">
          <div className="container300">
            <h2>Get in touch</h2>
            <p>
              If you have questions or comments, please get a hold of us in
              whichever way is most convenient. Ask away. There is no reasonable
              question that our team can not answer.
            </p>
          </div>
          <div className="container700">

            <form className="column">
              <label>
                YOUR NAME
              </label>
              <input
                type="p"
                name="from_name"
                value={toSend.from_name}
                onChange={handleChange}
              />

              <label>
                YOUR EMAIL
              </label>
              <input
                type="p"
                name="reply_to"
                value={toSend.reply_to}
                onChange={handleChange}
              />

              <label>
                YOUR MESSAGE (OPTIONAL)
              </label>
              <input
                className="message"
                type="p"
                name="message"
                value={toSend.message}
                onChange={handleChange}
              />

              <input className='order menu btn' type="submit" value="Submit" onClick={onSubmit} />
            </form>
          </div>
        </div>
      </div>
      <Header />
    </div>
  );
}

export default Contact;
