import React from 'react'
import './about.css'
import image from "../../assets/839.jpg";

function About() {
  return (
    <div id='about'>
      <div>
        <img src={image} alt="" className='image' />
      </div>
      <div>
        <h1>I Am</h1>
        <p>
        Obviously I'm a Web Designer. Web Developer with over 3 years of experience. Experienced with all stages of the development cycle for dynamic web projects. The as opposed to using 'Content here, content here', making it look like readable English.</p>
      </div>
    </div>
  )
}

export default About