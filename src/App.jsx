import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Strengths from './components/Strengths';
import Services from './components/Services';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-gray-50">
      <Header />
      <Hero />
      <About />
      <Strengths />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;