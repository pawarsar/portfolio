import React from 'react';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import { Toaster } from './components/ui/toaster';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import CaseStudies from './components/CaseStudies';
// import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleField from './components/ParticleField.jsx';

function App() {
  return (
    <ThemeProvider>
      <div className="App min-h-screen bg-white dark:bg-[#080d18] transition-colors duration-300">
        <ParticleField />
        <div className="site-content">
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <CaseStudies />
            {/* <Contact /> */}
          </main>
          <Footer />
          <Toaster />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
