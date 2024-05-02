import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/navbar'; 
import Index from './pages/index';
import About from './pages/about';
import Services from './pages/services';
import Form from './pages/form';
import Contact from './pages/contact';
import Sidebar from './pages/Sidebar'; // Correction ici

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/form" element={<Form />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>
    </Router>
  );
}

export default App;
