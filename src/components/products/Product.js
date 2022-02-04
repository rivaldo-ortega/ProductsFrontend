import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ id, image, title }) => {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(Math.floor(Math.random() * 1 * 60000));
  const [minutes, setMinutes] = useState(
    Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60))
  );
  const [seconds, setSeconds] = useState(
    Math.floor((timer % (1000 * 60)) / 1000)
  );
  const handleClick = () => {
    navigate(`/products/${id}`);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimer((current) => current - 1000);
      setMinutes(Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((timer % (1000 * 60)) / 1000));
    }, 1000);

    if (timer < 0) clearInterval(timeout);

    return () => clearInterval(timeout);
  }, [timer]);

  return (
    <article className='single-product'>
      <img src={image} alt='image'></img>
      <footer>
        <div className='product-info'>
          <h4>{title}</h4>
        </div>
        <div>
          <p
            className={
              seconds > 0 && seconds <= 10
                ? 'product-card__timer end'
                : 'product-card__timer'
            }
            style={{ color: `${timer < 0 && 'gray'}` }}
          >
            {timer < 0
              ? `Sale finished 🤡`
              : `Sale ends in: ${minutes < 10 ? `0${minutes}` : minutes}:${
                  seconds < 10 ? `0${seconds}` : seconds
                }`}
          </p>
        </div>
        <button className='delete-btn' onClick={timer > 0 && handleClick}>
          Show More
        </button>
      </footer>
    </article>
  );
};

export default Product;
