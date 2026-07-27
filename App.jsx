import React from 'react';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import About from './About.jsx';
import Skills from './Skills.jsx';
import Experience from './Experience.jsx';
import Projects from './Projects.jsx';
import Achievements from './Achievements.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col relative selection:bg-cyan-500 selection:text-slate-950">
      {/* Top Ambient Glow Bar */}
      <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 fixed top-0 z-[60]" />

      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
