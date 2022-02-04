import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loading from './Loading';
const ProductDetail = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  const { title, price, description, category, image } = character;

  useEffect(() => {
    fetch(`${process.env.API_STORE_URL}/${id}`)
      .then((resp) => resp.json())
      .then((data) => setCharacter(data));
  }, [id]);

  if (!character.image)
    return (
      <main>
        <Loading />
      </main>
    );

  return (
    <main>
      <section>
        <div className='product-detail'>
          <article className='single-product'>
            <img src={image} alt='image'></img>
            <footer>
              <div className='product-info'>
                <h4>{title}</h4>
              </div>
              <div className='product-info'>
                <p className='character__species'>{description}</p>
              </div>
              <div className='product-info'>
                Price: <span>{price}</span>
              </div>
              <div className='product-info'>
                Category: <span>{category}</span>
              </div>
              <Link to={-1}>
                <button className='delete-btn'>Return</button>
              </Link>
            </footer>
          </article>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
