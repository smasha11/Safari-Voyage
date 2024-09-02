import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './Hero';
import Nav from './Nav';
import Amenity from './Amenity';
import Why from './Why';
import International from './International';
import Destination from './Destination';
import Packages from './Packages';
import Review from './Review';
import Footer from './Footer';
import Dest from './Dest';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/amenities" element={<Amenity />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/why" element={<Why />} />
        <Route path="/international" element={<International />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/dest" element={<Dest />} />
        <Route path="/review" element={<Review />} />
        <Route path="*" element={<Hero />} /> {/* Default route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
