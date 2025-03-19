import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Projects limit={3} />
      <Skills />
      <Contact />
    </div>
  );
};

export default HomePage;
