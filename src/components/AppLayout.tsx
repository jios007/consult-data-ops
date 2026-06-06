import React from 'react';
import Navbar from './nio/Navbar';
import Hero from './nio/Hero';
import Services from './nio/Services';
import Approach from './nio/Approach';
import About from './nio/About';
import Contact from './nio/Contact';
import Footer from './nio/Footer';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-nio-bg font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Approach />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
