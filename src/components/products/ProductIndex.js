import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Products from './Products';

const urlProducts = process.env.API_STORE_URL;
const MainProduct = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(urlProducts);
      const data = await response.json();
      setLoading(false);
      setTours(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>No tours left</h2>
          <button className='btn' onClick={fetchData}>
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Products tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default MainProduct;
