import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Introduction from './components/Introduction.tsx';
import Curriculum from './components/Curriculum.tsx';
import Instructor from './components/Instructor.tsx';
import Testimonials from './components/Testimonials.tsx';
import Pricing from './components/Pricing.tsx';
import Footer from './components/Footer.tsx';
import FAQ from './components/FAQ.tsx';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />
      <main>
        <Hero />
        <Introduction />
        <Curriculum />
        <Instructor />
        <Testimonials />
        <FAQ />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;