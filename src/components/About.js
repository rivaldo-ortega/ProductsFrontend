import React, { useState } from 'react';
import people from './dataAbout';
import { FaGithub } from 'react-icons/fa';

const About = () => {
  const [index, setIndex] = useState(0);
  const { name, email, github, image, text } = people[index];

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img'></img>
      </div>
      <h4 className='autor'>{name}</h4>
      <p className='info'>{text}</p>

      <div className='features'>
        <div className='job'>Wishes</div>
        <div className='underline'></div>
        <ul>
          <li>
            <p className='info'> Find a good job</p>
          </li>
          <li>
            <p className='info'> Be successful</p>
          </li>
        </ul>
      </div>

      <div className='features'>
        <div className='job'>Email</div>
        <div className='underline'></div>
        <ul>
          <li>
            <p className='info'> {email}</p>
          </li>
        </ul>
      </div>

      <div className='features'>
        <div className='job'>GitHub</div>
        <div className='underline'></div>
        <ul>
          <li>
            <a href={github} className='git-icon'>
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default About;
