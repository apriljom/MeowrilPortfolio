import React from 'react';
import './About.css'; 
import aprilGrad from './toga.png';
 // Your graduation photo

// Import your tool icons here
import canvaIcon from './canva.png'; 
import figmaIcon from './figma.png';
import reactIcon from './react.png';
import jsIcon from './js.png';
import cssIcon from './css.png';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-card"> {/* The white rounded container */}
        
        {/* Left Side: Graduation Photo */}
        <div className="about-image-side">
          <img src={aprilGrad} className="about-pic" alt="Graduation" />
        </div>

        {/* Right Side: Bio and Tools */}
        <div className="about-content-side">
          {/* ADDED TITLE BELOW */}
          <h1 className="about-title">Introduction About Me</h1> 
          
          <p className="about-bio">
            I am a graduate of the National College of Science and Technology with 
            a Bachelor of Science in Computer Science. As a passionate Frontend Developer,
           I am dedicated to creating visually stunning and highly interactive user experiences.
          </p>
          
          <div className="tools-wrapper">
            <h3 className="tools-label">TOOLS</h3>
            <div className="tools-list">
               <img src={canvaIcon} alt="Canva" className="tool-icon-img" />
               <img src={figmaIcon} alt="Figma" className="tool-icon-img" />
               <img src={reactIcon} alt="React" className="tool-icon-img" />
               <img src={jsIcon} alt="JavaScript" className="tool-icon-img" />
               <img src={cssIcon} alt="CSS" className="tool-icon-img" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;