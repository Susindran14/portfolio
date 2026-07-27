import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalData } from './portfolioData.js';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="font-bold text-white text-lg tracking-tight">
            {personalData.name}
          </span>
          <span className="text-xs text-slate-500 font-mono mt-1">
            Software Engineer & Full-Stack Developer
          </span>
        </div>

        {/* Middle Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#achievements" className="hover:text-cyan-400 transition-colors">Achievements</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </div>

        {/* Right Back to Top & Socials */}
        <div className="flex items-center gap-3">
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 hover:bg-slate-800 transition-colors ml-2"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-6 border-t border-slate-900 text-center text-xs text-slate-500 font-mono">
        © {new Date().getFullYear()} Susindran N. Built with React, Tailwind CSS & Framer Motion.
      </div>
    </footer>
  );
}
