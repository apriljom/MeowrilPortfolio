import React from 'react';
import './Contact.css';

// ALL IMPORTS
import phoneIcon from './phone.png';
import mailIcon from './mail.png';
import tiktokIcon from './tiktok.png';
import fbIcon from './facebook.png';
import instaIcon from './instagram.png';
import socialsIcon from './socials.jpg';
import socials1Icon from './socials1.jpg'; // Make sure this file is in the same folder!

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        
        {/* Left Side: Slanted Phones */}
        <div className="contact-visuals">
          <div className="phone-mockup phone-1">
            {/* THIS PART FIXES THE PIC AND MAKES IT FIT */}
            <div 
              className="phone-screen" 
              style={{ 
                backgroundImage: `url(${socialsIcon})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>
            <div className="phone-screen" style={{ backgroundColor: 'red', height: '100%' }}>
   {/* This is just a test */}
</div>
          </div>
          
          <div className="phone-mockup phone-2">
            <div className="phone-screen" style={{ 
              backgroundImage: `url(${socials1Icon})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}></div>
          </div>
        </div>

        {/* Right Side: Contact List */}
        <div className="contact-info">
          <div className="contact-item">
            <div className="icon-bg"><img src={phoneIcon} alt="Phone" /></div>
            <div className="brush-stroke">09291143860</div>
          </div>
          <div className="contact-item">
            <div className="icon-bg"><img src={mailIcon} alt="Email" /></div>
            <div className="brush-stroke">15aprilgarcia018@gmail.com</div>
          </div>
          <div className="contact-item">
            <div className="icon-bg"><img src={tiktokIcon} alt="TikTok" /></div>
            <div className="brush-stroke">_Meowril</div>
          </div>
          <div className="contact-item">
            <div className="icon-bg"><img src={fbIcon} alt="Facebook" /></div>
            <div className="brush-stroke">Avril Garcia</div>
          </div>
          <div className="contact-item">
            <div className="icon-bg"><img src={instaIcon} alt="Instagram" /></div>
            <div className="brush-stroke">April Joy Garcia</div>
          </div>
        </div>

      </div>
    </section>
  );
};

// MANDATORY EXPORT - Without this, App.js will show a red error!
export default Contact;