import React from 'react';
import './navbar.css';
import {AiOutlineHome} from 'react-icons/ai';
import {SiAboutdotme} from 'react-icons/si';
import {GiSkills} from 'react-icons/gi';
import {AiOutlineFundProjectionScreen} from 'react-icons/ai';
import {MdOutlineContactPhone} from 'react-icons/md';
import {useState} from 'react';

const Navbar = () => {
  const [activeNavbar, setActiveNavbar] = useState('#')
  return (
    <nav>
      <a href="# " onClick={() => 
          setActiveNavbar('#')} 
          className={activeNavbar === '#' ? 'active' : ''}>
          <AiOutlineHome/>
      </a>

      <a href="#about" onClick={() => 
          setActiveNavbar('#about')} 
          className={activeNavbar === '#about' ? 'active' : ''}>
          <SiAboutdotme/>
      </a>

      <a href="#skills" onClick={() => 
          setActiveNavbar('#skills')} 
          className={activeNavbar === '#skills' ? 'active' : ''}>
          <GiSkills/>
      </a>

      <a href="#projects" onClick={() => 
          setActiveNavbar('#projects')} 
          className={activeNavbar === '#projects' ? 'active' : ''}>
          <AiOutlineFundProjectionScreen/>
      </a>

      <a href="#contact" onClick={() => 
          setActiveNavbar('#contact')} 
          className={activeNavbar === '#contact' ? 'active' : ''}>
          <MdOutlineContactPhone/>
      </a>
    </nav>
   
  )
}

export default Navbar;
