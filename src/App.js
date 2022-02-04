import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Sidebar from './Sidebar';
import Submenu from './Submenu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainProduct from './ProductIndex';
import ProductDetail from './ProductDetail';
import About from './About';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Submenu />
      <Routes>
        <Route path='/' element={<Hero />}></Route>
        <Route path='/products' element={<MainProduct />} />
        <Route path='/about' element={<About />} />
        <Route path='/products/:id' element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
