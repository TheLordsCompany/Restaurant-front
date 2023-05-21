import { React, useState,useEffect } from "react";
import { send } from "emailjs-com";
import Header from "../layout/Header";

function Contact() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  // const form = document.getElementById('my_form');
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });
  const onSubmit = (e) => {
  
    send("service_p4ubo3y", "template_58fflbr", toSend, "FIzc8RrZlasDluj6p")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        e.preventDefault();

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
    
      <div className='center headerPage' style={{ backgroundImage: `url("${process.env.PUBLIC_URL}/assets/images/qrMenu/MAMMA MIA/PESTO PASTA.jpg")` }}>
        <div className='headerOpacity center'>
          <div>
            <p className="textCenter">FIND US</p>
            <h1 className='great xlarger' >Contact</h1>

          </div>
        </div>

      </div>
      <div className="Center">
        <div className="margin">

          <div className="Center wrap  ">
            <div className="container500">
              <p className="great blod large">Contact</p>
              <h6 className="orange">King Salman Bin Abdulaziz Rd, Al Malqa, Riyadh 13524</h6>
            </div>
            <div className="container300" style={{ marginTop: 40 }}>
              <h3 className="bebas semiLarge"><span className="bebas">T:</span> 011 214 0255</h3>
              <h3 className="bebas semiLarge"><span className="bebas">E:</span> info@afreenlounge.com </h3>
            </div>
          </div>
          <div className="Center row">
            <div className="container500">
              <h2 className="great blod large">Follow Us</h2>
              
              <h6 className="orange pointer" onClick={()=>window.location.assign("https://www.instagram.com/afreencafe/")}>Instagram</h6>
              
            </div>
            <div className="container300">
              <h2 className="great blod large">Opening Hours</h2>
              <div className=" wrap ">
                <div className="margin">
                  
                  <h6 className="shadows semiLarge blod">Sunday to Wednesday </h6>
                  <h6 className="orange">2:00pm - 1:00am</h6>
                </div>
                <div className="margin">
                  
                  <h6 className="shadows semiLarge blod">Thursday to Saturday</h6>
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
            <h2 className="great">Get in touch</h2>
            <p className="bebas">
              If you have questions or comments, please get a hold of us in
              whichever way is most convenient. Ask away. There is no reasonable
              question that our team can not answer.
            </p>
          </div>
          <div className="container700">

            <form className="column">
              <label className="bebas">
                YOUR NAME
              </label>
              <input
                type="p"
                name="from_name"
                value={toSend.from_name}
                onChange={handleChange}
              />

              <label className="bebas">
                YOUR EMAIL
              </label>
              <input
                type="p"
                name="reply_to"
                value={toSend.reply_to}
                onChange={handleChange}
              />

              <label className="bebas">
                YOUR MESSAGE (OPTIONAL)
              </label>
              <textarea
                className="message"
                type="p"
                name="message"
                value={toSend.message}
                onChange={handleChange}
              />

              <input className='order margin btn' type="submit" name="Submit" onClick={onSubmit} />
               
            </form>
          </div>
        </div>
      </div>
      <Header />
    </div>
  );
}

export default Contact;
