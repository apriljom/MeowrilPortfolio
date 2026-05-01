import React, { useState, useEffect } from 'react';
import './App.css';
import './About.css';
import About from './About.js'; 
import Project from './Project.js'; 
import './Project.css';
import Contact from './Contact.js'; 
import './Contact.css';

// Image Imports
import linkedinIcon from './linkedin.png'; 
import tiktokIcon from './tiktok.png';
import facebookIcon from './facebook.png'; 
import instagramIcon from './instagram.png';
import aprilIcon from './AVRIL.png';
import resumePic from './resume.jpg'; 

const Hero = () => {
  const [activeNav, setActiveNav] = useState('home');
  const [showResume, setShowResume] = useState(false);

  // NAV SCROLL DETECTOR
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skill', 'contact'];
      sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveNav(id);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ SCROLL LOCK FOR RESUME MODAL
  useEffect(() => {
    if (showResume) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [showResume]);

  return (
    <div className="outer-frame"> 
      <div className="hero-container">
        {[...Array(75)].map((_, i) => (
          <div key={i} className={`sparkle s${i + 1}`}>✦</div>
        ))}

        <nav className="navbar">
          <div className="logo">AprilGarcia</div>
          <div className="nav-links">
            <a href="#home" className={activeNav === 'home' ? 'active' : ''}>Home</a>
            <a href="#about" className={activeNav === 'about' ? 'active' : ''}>About</a>
            <a href="#skill" className={activeNav === 'skill' ? 'active' : ''}>My Project</a>
            <a href="#contact" className={activeNav === 'contact' ? 'active' : ''}>Contact</a>
          </div>
        </nav>

        <main className="hero-content" id="home">
          <div className="hero-text">
            <h2 className="greeting">Hello,</h2>
            <h1 className="name">
              I’m <span className="gradient-text">April Joy</span>
            </h1>
            <h1 className="role">
              <span className="gradient-text">Frontend Developer</span>
            </h1>
            <p className="location">From Philippines</p>
            <button className="hire-btn" onClick={() => setShowResume(true)}>
              View Resume
            </button>
          </div>

          <div className="hero-image">
            <div className="burst-container"> 
              <img src={aprilIcon} alt="My Pic" className="profile-img" />
            </div>
          </div>
        </main>

        {/* ✅ RESUME MODAL */}
        {showResume && (
          <div className="resume-overlay" onClick={() => setShowResume(false)}>
            <div className="resume-modal" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setShowResume(false)}>×</button>
              <div className="resume-img-wrapper">
                <img src={resumePic} alt="Resume" className="resume-img" />
              </div>
            </div>
          </div>
        )}

        <div className="social-links">
          <a href="https://www.linkedin.com/in/april-joy-garcia-234a99324/" target="_blank" rel="noreferrer" className="icon-circle">
            <img src={linkedinIcon} alt="Linkedin" className="social-img" />
          </a>
          <a href="https://www.tiktok.com/@_meowril?lang=en" target="_blank" rel="noreferrer" className="icon-circle">
            <img src={tiktokIcon} alt="Tiktok" className="social-img" />
          </a>
          <a href="https://www.facebook.com/Meowril" target="_blank" rel="noreferrer" className="icon-circle">
            <img src={facebookIcon} alt="Facebook" className="social-img" />
          </a>
          <a href="https://www.instagram.com/_meowril/" target="_blank" rel="noreferrer" className="icon-circle">
            <img src={instagramIcon} alt="Insta" className="social-img" />
          </a>
        </div>

        <section id="about"><About/></section>
        <section id="skill"><Project /></section>
        <section id="contact"><Contact /></section>
      </div>
    </div>
  );
};

export default Hero;