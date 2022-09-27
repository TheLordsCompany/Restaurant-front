import { React, useState } from "react";
import { send } from "emailjs-com";

function Contact() {
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
      <div className="center">
        <h1>Contact</h1>
      </div>
      <div className="container">
        <div className="wrap row ">
          <div className="container500">
            <h2>Contact</h2>
            <h6>510 Mount Eden Road, Mount Eden, Auckland 1024</h6>
          </div>
          <div>
            <h3>T: 09 630 6656</h3>
            <h3>E: info@indianlounge.co.nz</h3>
          </div>
        </div>
        <div className="wrap row">
          <div className="container500">
            <h2>Follow Us</h2>
            <h6>Facebook</h6>
            <h6>Instagram</h6>
            <h6>TripAdvisor</h6>
          </div>
          <div >
            <h2>Opening Hours</h2>
            <div className="spaceBetween wrap">
              <div>
                <h4>Lunch Time</h4>
                <h5>Monday to Sunday</h5>
                <h6>12.00pm - 3:00pm</h6>
              </div>
              <div>
                <h4>Dinner Time</h4>
                <h5>Monday to Sunday</h5>
                <h6>5.00pm - 10:30pm</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>map</div>
      <div>
        <h2>Get in touch</h2>
        <div>
          left
          <p>
            If you have questions or comments, please get a hold of us in
            whichever way is most convenient. Ask away. There is no reasonable
            question that our team can not answer.
          </p>
        </div>
        <div>
          right
          <form>
            <label>
              YOUR NAME
              <input
                type="p"
                name="from_name"
                value={toSend.from_name}
                onChange={handleChange}
              />
            </label>
            <label>
              YOUR EMAIL
              <input
                type="p"
                name="reply_to"
                value={toSend.reply_to}
                onChange={handleChange}
              />
            </label>
            <label>
              YOUR MESSAGE (OPTIONAL)
              <input
                type="p"
                name="message"
                value={toSend.message}
                onChange={handleChange}
              />
            </label>
            <input type="submit" value="Submit" onClick={onSubmit} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
