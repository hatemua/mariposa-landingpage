import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoBar } from './components/LogoBar';
import { Problem } from './components/Problem';
import { ProductHero } from './components/ProductHero';
import { Components } from './components/Components';
import { UseCases } from './components/UseCases';
import { Roadmap } from './components/Roadmap';
import { SocialProof } from './components/SocialProof';
import { FinalCTA } from './components/FinalCTA';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <LogoBar />
        <Problem />
        <ProductHero />
        <Components />
        <UseCases />
        <Roadmap />
        <SocialProof />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
