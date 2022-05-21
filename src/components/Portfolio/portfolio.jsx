import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/weather.png';
import IMG2 from '../../assets/social-media-marketing.jpg';
import IMG3 from '../../assets/pwa.png';
import IMG4 from '../../assets/gym.png';
import IMG5 from '../../assets/password.png';
import IMG6 from '../../assets/quiz.jpg';


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Weather Dashboard',
    github: 'https://github.com/jamillerooks/weather-dashboard',
    demo: 'https://jamillerooks.github.io/weather-dashboard/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Tech Blog',
    github: 'https://github.com/jamillerooks/tech-blog-MVC',
    demo: 'https://tech-blog-launch.herokuapp.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'PWA Text Editor',
    github: 'https://github.com/jamillerooks/PWA-text-editor',
    demo: 'https://stark-coast-15404.herokuapp.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Gym Diary',
    github: 'https://github.com/ItzDerian/gym-diary',
    demo: 'https://tranquil-reaches-54677.herokuapp.com'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Password Generator',
    github: 'https://github.com/jamillerooks/password-generator',
    demo: 'https://jamillerooks.github.io/password-generator'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Coding Quiz',
    github: 'https://github.com/jamillerooks/code-quiz',
    demo: 'https://jamillerooks.github.io/code-quiz'
  }
]


const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects;
