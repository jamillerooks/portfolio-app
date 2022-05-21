import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'


const Footer = () => {
  return (
    <footer>
      <a href="# " className='footer__logo'>Jamille Rooks</a>

      <ul className='permalinks'>
        <li><a href="# ">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/Jamille.Rooks"><FaFacebookF/></a>
        <a href="https://www.instagram.com/jamillerooks1"><FiInstagram/></a>
        
      </div>

      <div className="footer__copyright">

      </div>
    </footer>
  )
}

export default Footer