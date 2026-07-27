import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, CheckCircle2, Sparkles, Code2 } from 'lucide-react';
import { experienceData } from './portfolioData.js';

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleExpand = (idx) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="experience" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CAREER PATHWAY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work & <span className="text-gradient">Internship Experience</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Hands-on full-stack development experience, API engineering, and responsive software design.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2" />

          {experienceData.map((exp, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative mb-12"
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-0 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/20 z-20">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                </div>

                {/* Timeline Card */}
                <div className="ml-12 sm:ml-0 sm:w-[calc(50%-2rem)] sm:even:ml-auto">
                  <div className="glass-panel rounded-2xl p-6 border border-slate-800 shadow-xl transition-all duration-300 hover:border-cyan-500/40">
                    
                    {/* Role Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-[11px] font-mono text-cyan-300 font-semibold">
                        {exp.type}
                      </span>
                      <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-4">
                      <span className="font-semibold text-slate-200 flex items-center gap-1">
                        <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                        {exp.company}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Expand Details Trigger */}
                    <button
                      onClick={() => toggleExpand(idx)}
                      className="w-full py-2 px-3 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300 hover:text-cyan-200 flex items-center justify-between transition-colors"
                    >
                      <span>{isExpanded ? 'Hide Key Highlights' : 'View Key Highlights & Tech'}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {/* Expandable Content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-slate-800/80 space-y-4"
                        >
                          <div>
                            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                              Key Highlights:
                            </h4>
                            <ul className="space-y-2">
                              {exp.highlights.map((h, hIdx) => (
                                <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                  <span>{h}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1">
                              <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                              <span>Technologies Used:</span>
                            </h4>
                            <div className="flex flex-wrap gap-1.5">
                              {exp.tech.map((t, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-300"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
