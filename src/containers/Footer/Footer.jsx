import React from 'react'
import './Footer.css'
import gpt3Logo from '../../assets/logo.svg'

const Footer =()=>{
return (
      <div className='gpt3__footer section__padding'>
        <div className='gpt3__footer-heading'>
          <h1 className='gradient__text'>Step into the future before anyone else</h1>
        </div>

        <div className='gpt3__footer-btn'>
          <p> Request Early Access</p>
        </div>

        <div className='gpt3__footer-links'>
          <div className='gpt3__footer-links_logo'>
            <img src={gpt3Logo} alt='logo'></img>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia quo impedit architecto nemo saepe debitis eos quae doloremque! Doloribus rerum incidunt cum, reprehenderit vitae nulla ullam quos ut dolorum quo. </p>
          </div>

          <div className='gpt3__footer-links_div'>
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p> Counters</p>
            <p>Contact</p>
          </div>

          <div className='gpt3__footer-links_div'>
            <h4>Company</h4>
            <p>Terms & Conditions </p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>

          <div className='gpt3__footer-links_div'>
            <h4>Get in touch</h4>
            <p>Georgia a4656 Dr asasd</p>
            <p>52 243-131-5991</p>
            <p>Albertoifm64@gmail.com</p>
          </div>


        </div>

    <div className='gpt3__footer-copyright'>
      <p>2023 GPT All Rights Reserved</p>
    </div>

    </div>
)
}

export default Footer