import React from 'react';
import CTA from './CTA';
import './header.css';
import Me from '../../assets/web0.png'
//import Prism from '../../assets/prism.jpg'
import SocialMedia from './SocialMedia';


const header = () => {
  
  return (
    <header>
      <div className="container header_container">
        <h5> Hello, I am</h5>
        <h1> Jamille Rooks</h1>
        <h5 className='text-light App'>Fullstack Web Developer</h5>
        <CTA/>
        <SocialMedia />
        <div className='me'>
          <img src={Me} alt=" profile of Jamille Rooks" />
        </div>
        {/* <div className='mainPic'>
          <img src={Prism} alt="Multi-colored objects floating up"/>
        </div> */}
      </div>
      </header>
  )
}


export default header