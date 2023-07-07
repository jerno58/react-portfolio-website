import React from 'react'
import './about.css'
import ME from '../../assets/clock2.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {GiGraduateCap} from 'react-icons/gi'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ years working experience</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Jobs</h5>
              <small>2 internships</small>
            </article>

            <article className="about__card">
              <GiGraduateCap className='about__icon'/>
              <h5>Education</h5>
              <small>Pursuing MS in Computer Science</small>
            </article>
          </div>

          <p>
          I'm Joshua Erno, a customer-oriented 
          problem solver and a passionate computer science student specializing in 
          machine learning and artificial intelligence. I graduated with high 
          honors from Michigan State University, completing my bachelor's degree
          in computer science in three years. Currently, I'm pursuing my 
          master's degree, also in computer science, at Michigan State University. 
          I've had the privilege of interning as a software engineer at 
          Ford Motor Company and JPMorgan Chase & Co, gaining practical 
          experience and contributing to real-world projects. I thrive on 
          curiosity and the desire to learn new things and meet new people. 
          As a south-east Michigan native, I'm deeply connected to my local 
          community and excited to leverage my skills to make a positive 
          impact. On this website, I aim to share my knowledge, experiences, 
          and insights in the field of computer science. Whether you're interested 
          in collaboration, idea exchange, or simply learning something new, 
          I invite you to join me on this exciting journey!
          </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;