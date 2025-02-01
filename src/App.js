import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Compontents/Navbar';
import { Footer } from './Compontents/Footer';
import { Homepage } from './Pages/Homepage';
import { About } from './Pages/About';
import { CArds } from './Pages/CArds';
// import { Login } from './Pages/Login';
import HotelBookingForm from './Pages/Booking';

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<>
          <Homepage />
          <About />
          <CArds />
          
        </>} />
        <Route path="/home" element={<>
          <Homepage />
          <About />
      
          <CArds />

        </>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<>
          
          <CArds />
        </>} />
        <Route path="/account" element={<><HotelBookingForm /></>} />
      </Routes>
      <Footer />
    </Router>
  );
};
