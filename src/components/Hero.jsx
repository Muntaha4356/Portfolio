import React from 'react'
import heroImage from '../assets/muntaha.jpg';
import './Hero.css';
const Hero = () => {
  return (
    <section>
      <div className="Hero"> 

        <img className="md:w-[220px] md:h-[220px] aspect-square object-cover rounded-full md:rounded-full border-[5px] border-[#2b2b2b] shadow-[0_0_30px_rgba(128,90,213,0.5)] transition-transform duration-300 ease-in-out" id="profile" src={heroImage} alt="Hero" />
        <div className="Introsection">
          <h1 id="introhead">who am i?</h1>
          <p id="intro">I am Sidra tul Muntaha a Full Stack Web Developer</p>
          <button  className="px-10 py-5 mt-8 bg-gradient-to-r from-[#7b61ff] to-[#9d4edd] rounded-[30px] font-semibold font-['Montserrat_Alternates',sans-serif] cursor-pointer transition-all duration-300 ease-in-out shadow-[0_4px_10px_rgba(123,97,255,0.3)] hover:-translate-y-[3px] hover:shadow-[0_6px_15px_rgba(123,97,255,0.5)] no-underline">
            <a
              href="/Resume.png"
              download
              className='block w-full h-full text-white no-underline'
            >
              Download CV
            </a>
          </button>
        </div>


      </div>
    </section>
  )
}

export default Hero

