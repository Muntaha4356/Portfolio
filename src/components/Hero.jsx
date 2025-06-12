import React from 'react'
import heroImage from '../assets/muntaha.jpg';
import './Hero.css';
const Hero = () => {
  return (
    <section id="about">
    <div className="Hero container">

        <img className="photos" id="profile" src={heroImage} alt="Hero" />
        <div className="Introsection">
            <h1 id= "introhead">who am i?</h1>
        <p id="intro">I am Sidra tul Muntaha a Full Stack Web Developer</p>
        <button className="learn-button">
          <a href="/resume.pdf" download className="learn-button" style={{ textDecoration: "none" }}> 
              Download CV
          </a>
        </button>
        </div>
        
        
    </div>
    </section>
  )
}

export default Hero
