import React from 'react';
import { useGlobalContext } from '../context';
const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>REACT</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            dolore, delectus laboriosam ratione nemo officia sapiente
            recusandae, rem, voluptate magnam cumque.
          </p>
          <button className='btn'>Start now</button>
        </article>
        <article className='hero-images'></article>
      </div>
    </section>
  );
};

export default Hero;
