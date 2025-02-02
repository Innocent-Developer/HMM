import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Compontents/Navbar';
import { Footer } from './Compontents/Footer';
import { Homepage } from './Pages/Homepage';
import { About } from './Pages/About';
import { CArds } from './Pages/CArds';
import HotelBookingForm from './Pages/Booking';
import { Gallery } from './Pages/Gallery';
import ClientReviews from './Pages/Clint/Clintrev';
import { Login } from './Pages/Login';
import { Signup } from './Pages/Signup';

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<>
          <Homepage />
          <About />
          <CArds />
          <Gallery />
          <ClientReviews />
          
        </>} />
        <Route path="/home" element={<>
          <Homepage />
          <About />
          <CArds />
          <Gallery />
          <ClientReviews />

        </>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<>
          <CArds />
        </>} />
        <Route path="/Book-Now" element={<><HotelBookingForm /></>} />
        <Route path="/account/login" element={<><Login /></>} />
        <Route path="/account/sigup" element={<><Signup /></>} />
      </Routes>
      <Footer />
    </Router>
  );
};
