import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';  // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css';  // Import toast styles
import Navbar from './components/Navbar';
import Home from './components/Home';
import FAQ from './components/FAQ';
import BookDetails from './components/BookDetails';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import './App.css';  // Import global CSS styles


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />  {/* Add ToastContainer globally */}
      <Footer/>
    </Router>
    
  );
}

export default App;
