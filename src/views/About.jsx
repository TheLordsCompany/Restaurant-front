import React from 'react'

function About() {
  return (
    <div>
      <div className='center'>
        <h1>About Us</h1>
      </div>
      <div className='center'>
        <div>
          <p className='textCenter'>MORE FLAVOR FOR LESS</p>
          <h2 className='textCenter'>Good food and</h2>
          <h2 className='textCenter'> Great vibes</h2>
        </div>
      </div>

      <div className='center wrap'>
        <div className='container500 card'>
          <img />
        </div>
        <div className='container500'>
          <p>Indian Lounge is brought to you with a vision to share the culture,passion, and flavours of the Indian Cuisine. We draw influences from major food regions across the Indian subcontinent. The Traditional recipes used are fine tuned to the tastes of the 21st century, to tantalise your taste busds. A great meal also comes with great service, ambience and of course the company. At Indian Lounge we pride on Quality service and Quality food. It is our honour to welcome you to experience the warm hospitality and the flavours of India.
            We offer home delivery and takeaway, order your <span>food online now.</span> </p>
        </div>
      </div>
      <div className='row wrap container center'>
        <div className='container300 center card'>
          <img />
          <h2>Hangout.</h2>
        </div>
        <div className='container300 center card'>
          <img />
          <h2>Drinks.</h2>
        </div>
        <div className='container300 center card'>
          <img />
          <h2>Fine Dine.</h2>
        </div>
      </div>
      <div>
        <div className='center'>
          <div>
            <p className='textCenter'>FOLLOW ALONG</p>
            <h2 className='textCenter'>@indianlounge</h2>
          </div>
        </div>
        <div >
          <div className='center'>
            <div className='card container500'></div>
            <div className='card container250'></div>
            <div className='card container250'></div>
          </div>
          <div className='center'>
            <div className='card container700'></div>
            <div className='card container300'></div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About