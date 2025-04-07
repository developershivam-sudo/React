import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Products from './pages/Products'
const App = () => {
  return (
    <div className='text-white m-5'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Routes>
        <Route path='/About' element={<About />} />
      </Routes>
      <Routes>
        <Route path='/Contacts' element={<Contacts />} />
      </Routes>
      <Routes>
        <Route path='/Products' element={<Products />} />
      </Routes>
    </div>
  );
};

export default App;