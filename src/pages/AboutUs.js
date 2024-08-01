// src/components/AboutUs.js

import React from 'react';
import { Container } from 'react-bootstrap';
import './AboutUs.css';
import teamImage from '../assets/team.png'; // Replace with an appropriate team image
import missionImage from '../assets/mission.png'; // Replace with an appropriate mission image
// import historyImage from '../assets/history.png'; // Replace with an appropriate history image
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div>
      <header className="hero bg text-white text-center py-5" style={{ background: '#54BA9E' }}>
        <Container>
          <h1 className="display-4">About Us</h1>
          <p className="lead">Learn more about our mission, team, and journey towards sustainability.</p>
        </Container>
      </header>
      <main className='main1'>
        <div className='section'>
          <img src={missionImage} alt='Our Mission' className='sectionImage'/>
          <div className='sectionContent'>
            <h2>Our Mission</h2>
            <p>
              Our mission is to drive sustainable development by integrating innovative solutions and practices. We aim to empower individuals and organizations with the tools and knowledge needed to make a positive environmental impact. By focusing on renewable energy, resource conservation, and community engagement, we strive to create a greener, healthier future for all.
            </p>
          </div>
        </div>
        <div className='section'>
          <img src={teamImage} alt='Our Team' className='sectionImage'/>
          <div className='sectionContent'>
            <h2>Our Team</h2>
            <p>
              Our dedicated team of professionals is committed to advancing sustainability through expertise and passion. With diverse backgrounds in environmental science, engineering, and community development, we work collaboratively to drive innovation and deliver effective solutions. Meet the people behind our mission who are working tirelessly to make a difference.
            </p>
          </div>
        </div>
        <div className='section'>
          {/* <img src={historyImage} alt='Our History' className='sectionImage'/> */}
          <div className='sectionContent'>
            
          </div>
        </div>
       
      </main>
    </div>
  );
};

export default AboutUs;
