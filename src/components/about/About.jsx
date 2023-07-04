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
            This is a paragraph where I will talk about myself.
          </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;