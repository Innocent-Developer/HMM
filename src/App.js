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
import { Signup } from './Pages/Signup';
import { Login } from './Pages/Login';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Updates } from './Pages/Updates';
import Contact from './Pages/Contactus';
import HotelDashboard from './Pages/dashbord';

AOS.init();

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
          <Updates />
          
        </>} />
        <Route path="/home" element={<>
          <Homepage />
          <About />
          <CArds />
          <Gallery />
          <ClientReviews />
          <Updates />

        </>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<>
          <CArds />
        </>} />
        <Route path="/Book-Now" element={<><Login /></>} />
        <Route path="/Book-Now/:id" element={<><HotelBookingForm /></>} />
        <Route path="/account/login" element={<><Login /></>} />
        <Route path="/account/signup" element={<><Signup /></>} />
        <Route path="/contact" element={<><Contact /></>} />
        <Route path="/dashboard/admin" element={<><HotelDashboard /></>} />
      </Routes>
      <Footer />
    </Router>
  );
};
