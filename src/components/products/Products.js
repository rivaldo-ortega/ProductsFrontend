import React from 'react';
import Product from './Product';
const Products = ({ tours, removeTour }) => {
  return (
    <section>
      <div className='title'>
        <h2>Our Products</h2>
        <div className='underline'></div>
      </div>
      {tours.map((tour) => {
        return <Product key={tour.id} {...tour} removeTour={removeTour} />;
      })}
    </section>
  );
};

export default Products;
