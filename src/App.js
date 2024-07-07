import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Product1 from './pages/Product1';
import Product2 from './pages/Product2';
import Product3 from './pages/Product3';
import CompareAll from './pages/CompareAll';
import PreBook from './pages/PreBook';
import ContactUs from './pages/ContactUs';
import Rentals from './pages/Rentals';

const App = () => {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/products/se03lite" element={<Product1 />} />
      <Route path="/products/se03" element={<Product2 />} />
      <Route path="/products/se03max" element={<Product3 />} />
      <Route path="/compareall" element={<CompareAll />} />
      <Route path="/prebook" element={<PreBook />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/rentals" element={<Rentals />} />
    </Routes>
  </Router>
  );
};

export default App;
