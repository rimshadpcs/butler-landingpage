import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Problem from './components/sections/Problem';
import Agents from './components/sections/Copilots';
import Features from './components/sections/Features';
import Testimonials from './components/sections/Testimonials';
import Pricing from './components/sections/Pricing';
import CTA from './components/sections/CTA';
import Footer from './components/layout/Footer';
import './styles/globals.css';

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Agents />
        <Features />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;