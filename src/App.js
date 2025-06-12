import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sample from './components/Sample';
import Features from './components/Features';
import Expertise from './components/Expertise';
import Process from './components/Process';
import Testimonial from './components/Testimonial';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Navbar />
        <Hero />
        <Sample />
        <Features />
        <Expertise />
        <Process />
        <Testimonial />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}

export default App;
