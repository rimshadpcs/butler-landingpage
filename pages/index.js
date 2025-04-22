import React from 'react';
import Navbar from '../src/components/layout/Navbar';
import Footer from '../src/components/layout/Footer';
import Hero from '../src/components/sections/Hero';
import Problem from '../src/components/sections/Problem';
import Copilots from '../src/components/sections/Copilots';
import Features from '../src/components/sections/Features';
import BuiltForSuccess from '../src/components/sections/BuiltForSuccess';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Features />
        <Copilots />
        <BuiltForSuccess />
      </main>
      <Footer />
    </div>
  );
}
