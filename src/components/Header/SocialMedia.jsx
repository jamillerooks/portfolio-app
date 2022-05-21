import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FaFacebookSquare} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/jamillerooks/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/jamillerooks" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://www.facebook.com/Jamille.Rooks" target="_blank" rel="noreferrer"><FaFacebookSquare/></a>
    </div>
  )
}

export default SocialMedia;