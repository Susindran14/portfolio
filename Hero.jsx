import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, Award, Code2, CheckCircle2 } from 'lucide-react';
import { personalData } from './portfolioData.js';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Ambient background glow spheres */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-6 shadow-lg shadow-cyan-950/20 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{personalData.status}</span>
            </div>

            {/* Name & Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight">
              Hi, I'm <span className="text-gradient">{personalData.name}</span>
            </h1>

            <h2 className="text-xl sm:text-2xl font-semibold text-slate-300 mb-6 flex items-center gap-2">
              <Code2 className="w-6 h-6 text-cyan-400 shrink-0" />
              <span>{personalData.subhead}</span>
            </h2>

            <p className="text-slate-400 text-base sm:text-lg mb-8 leading-relaxed max-w-2xl">
              {personalData.objective}
            </p>

            {/* Core Strength Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['Full-Stack Web', 'React Native Mobile', 'Django & Python', 'Arduino IoT', 'MySQL & MongoDB'].map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-mono rounded-md bg-slate-900/80 border border-slate-800 text-slate-300 flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="group px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-cyan-500/50 font-semibold text-sm transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </a>

              <a
                href="./resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 text-cyan-400 border border-slate-800 hover:border-cyan-500/30 font-semibold text-sm transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Resume</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-800/80 w-full">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Connect:</span>
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Animated Profile Image Frame & Floating Accents */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
              
              {/* Spinning Ring Background */}
              <div className="absolute inset-[-12px] rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-400 opacity-60 blur-md animate-spin-slow" />
              
              {/* Inner Glowing Ring */}
              <div className="absolute inset-[-4px] rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500 opacity-80" />

              {/* Profile Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-950 bg-slate-900 shadow-2xl group cursor-pointer">
                <img
                  src={personalData.profileImage}
                  alt={personalData.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="text-xs font-mono text-cyan-300 bg-slate-950/80 px-3 py-1 rounded-full border border-cyan-500/30">
                    Susindran N
                  </span>
                </div>
              </div>

              {/* Floating Badge 1: CGPA */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-xl backdrop-blur-md flex items-center gap-2.5"
              >
                <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 font-mono">B.E. CSE</div>
                  <div className="text-sm font-bold text-white">8.2 CGPA</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Paper Presentation Award */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-xl backdrop-blur-md flex items-center gap-2.5"
              >
                <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 font-mono">1st Place Winner</div>
                  <div className="text-sm font-bold text-white">Paper Presentation</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* Bottom Quick Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-md"
        >
          {personalData.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left p-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 font-mono">
                {stat.value}
              </span>
              <span className="text-xs font-semibold text-slate-200 mt-1">{stat.label}</span>
              <span className="text-[11px] text-slate-500">{stat.sub}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
