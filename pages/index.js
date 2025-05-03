// pages/index.js
import React from 'react';
import Navbar              from '../src/components/layout/Navbar';
import Hero                from '../src/components/sections/Hero';
import Problem             from '../src/components/sections/Problem';
import Features            from '../src/components/sections/Features';
import Copilots            from '../src/components/sections/Copilots';
import BeforeAfterSection  from '../src/components/sections/BeforeAndAfter';
import VibeProductManagement  from '../src/components/sections/VibeProductManagement';
import IntegrateWithSection from '../src/components/sections/IntegrateWithSection';
import Pricing             from '../src/components/sections/Pricing';
import BuiltForSuccess     from '../src/components/sections/BuiltForSuccess';
import Footer              from '../src/components/layout/Footer';
import DashboardSection from '../src/components/sections/DashboardSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main>
        <Hero />             {/* 1) Hero first */}
        <Problem />
        <DashboardSection/>        
        <Features />         {/* 3) Then How It Works ONLY once */}
        <Copilots />
        <BeforeAfterSection />
        <VibeProductManagement/>
        <IntegrateWithSection/>
        <Pricing />
        <BuiltForSuccess />
      </main>
      <Footer />
    </div>
  );
}
