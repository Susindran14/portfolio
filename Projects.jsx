import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Sparkles, Layers, CheckCircle2, X, Code2, ArrowUpRight } from 'lucide-react';
import { projectsData } from './portfolioData.js';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Mobile App', 'IoT / Hardware', 'Python / Database'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Real-world applications built with React Native, MongoDB Atlas, Arduino C++, Python, and full-stack APIs.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-xl bg-slate-900 border border-slate-800 gap-1 overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-all ${
                  activeFilter === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-md'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-panel glass-panel-hover rounded-2xl border border-slate-800 flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6">
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-[11px] font-mono text-cyan-300 font-semibold">
                    {project.badge}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    {project.category}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-cyan-300/90 font-mono mb-4">
                  {project.tagline}
                </p>

                <p className="text-xs sm:text-sm text-slate-400 line-clamp-3 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {project.features.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded bg-slate-900/90 border border-slate-800 text-[10px] font-mono text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 mt-auto flex items-center justify-between border-t border-slate-800/80 pt-4">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold"
                >
                  <span>Explore Details</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
                    title="View Code on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-panel max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-700 p-6 sm:p-8 shadow-2xl relative"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>

                <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 font-semibold mb-3 inline-block">
                  {selectedProject.badge}
                </span>

                <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                <p className="text-sm font-mono text-cyan-400 mb-6">{selectedProject.tagline}</p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Overview:</h4>
                    <p className="text-sm text-slate-300 leading-relaxed">{selectedProject.description}</p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">Key Features & Architecture:</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1">
                      <Code2 className="w-4 h-4 text-cyan-400" />
                      <span>Tech Stack:</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t, idx) => (
                        <span key={idx} className="px-3 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-800 flex items-center gap-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      <span>View GitHub Repository</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
