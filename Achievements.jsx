import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, CheckCircle2, Sparkles, BookCheck, ShieldCheck } from 'lucide-react';
import { achievementsData, certificationsData } from './portfolioData.js';

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 sm:py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>HONORS & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Achievements & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Recognized research contributions and professional certifications in computer science & environmental engineering.
          </p>
        </div>

        {/* Paper Presentation Winner Spotlight Banner */}
        {achievementsData.map((ach, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 sm:mb-16 glass-panel rounded-2xl p-5 sm:p-8 border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-slate-900 to-purple-500/10 relative overflow-hidden group"
          >
            <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
              <Trophy className="w-48 h-48 sm:w-64 sm:h-64 text-amber-400" />
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6 relative z-10">
              <div className="p-3 sm:p-4 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/40 shrink-0 shadow-lg shadow-amber-500/10">
                <Trophy className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>

              <div className="flex-grow">
                <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-[11px] font-mono text-amber-300 font-bold mb-2">
                  <Award className="w-3.5 h-3.5 shrink-0" />
                  <span>FIRST PLACE WINNER</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 leading-snug">{ach.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                  {ach.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Certifications Grid */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-2.5 justify-center">
            <BookCheck className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 shrink-0" />
            <span>Verified Certifications</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {certificationsData.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-panel glass-panel-hover rounded-xl p-4 sm:p-5 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-[10px] font-mono text-cyan-300 font-semibold">
                      {cert.badge}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-white mb-1.5 leading-snug">
                    {cert.name}
                  </h4>
                  <p className="text-xs font-mono text-slate-400">{cert.issuer}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Credential Verified</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
