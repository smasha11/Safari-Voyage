import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Hero from './Hero';
import Amenity from './Amenity';
import Why from './Why';
import International from './International';
import Destination from './Destination';
import Packages from './Packages';
import Review from './Review';
import Footer from './Footer';
import Dest from './Dest';
import TripModal from './TripModal';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Amenity />
            <Destination />
            <Why />
            <International />
            <Packages />
            <Review />
          </>
        } />
        <Route path="/dest" element={<Dest />} />
        <Route path="/destination/:destinationName" element={<TripModal />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
