import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Compontents/Navbar';
import { Footer } from './Compontents/Footer';
import { Homepage } from './Pages/Homepage';
import { About } from './Pages/About';
import { Roomcontent } from './Pages/Room-content';
import { CArds } from './Pages/CArds';

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<>
          <Homepage />
          <About />
          <Roomcontent />
          <CArds />
          
        </>} />
        <Route path="/home" element={<>
          <Homepage />
          <About />
          <Roomcontent />
          <CArds />

        </>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<>
          <Roomcontent />
          <CArds />
        </>} />
      </Routes>
      <Footer />
    </Router>
  );
};
