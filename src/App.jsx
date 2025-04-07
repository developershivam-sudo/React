import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Products from './pages/Products'
import Navbar from './components/Navbar';
const App = () => {
  return (
    <div className='text-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Routes>
        <Route path='/about' element={<About />} />
      </Routes>
      <Routes>
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
      <Routes>
        <Route path='/products' element={<Products />} />
      </Routes>
    </div>
  );
};

export default App;