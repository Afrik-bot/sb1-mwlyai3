import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Map from './components/Map';
import Home from './pages/Home';
import Consulting from './pages/Consulting';
import AI from './pages/AI';
import Wines from './pages/Wines';
import TamTam from './pages/TamTam';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/wines" element={<Wines />} />
        <Route path="/tamtam" element={<TamTam />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Newsletter />
      <Map />
    </div>
  );
}

export default App;