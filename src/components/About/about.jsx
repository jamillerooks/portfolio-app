import React from 'react'
import './about.css'
import ME from '../../assets/Headshot.jpg';
import {FaAward} from 'react-icons/fa'

import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
   
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>
          <p>
          Accomplished, motivated, and dynamic leader with experience and expertise in web development, project management, and multifaceted collaboration in fast paced environments. Adept at defining vision, developing strategies, and driving continuous improvement. Career track includes contribution to high-performance work cultures with a demonstrated ability to partner throughout all levels of the organization. Seeking a career change to the Web Development sector. Proud Veteran of the United States Army and United States Coast Guard.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
        </div>
        
      
    </section>
  )
}


export default about;