import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Layout, Code2, Cloud, CheckCircle, Languages, Brain, Sparkles } from 'lucide-react';
import { personalData, educationData, interestsData, languagesData } from './portfolioData.js';

const interestIcons = {
  Layout: Layout,
  Code2: Code2,
  Cloud: Cloud
};

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BACKGROUND & ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Computer Science student passionate about full-stack engineering, algorithms, cloud databases, and IoT innovations.
          </p>
        </div>

        {/* Top Grid: Story & Areas of Interest */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-12 sm:mb-16">
          
          {/* Bio Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 glass-panel rounded-2xl p-5 sm:p-8 flex flex-col justify-between border border-slate-800"
          >
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2.5">
                <BookOpen className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>My Journey</span>
              </h3>
              <div className="space-y-3.5 text-slate-300 text-sm sm:text-base leading-relaxed">
                {personalData.about.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Languages Spoken */}
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-800">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Languages className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Languages Known</span>
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {languagesData.map((lang, idx) => (
                  <div key={idx} className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-1.5 text-xs">
                    <span className="font-semibold text-slate-200">{lang.name}:</span>
                    <span className="text-slate-400">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Core Areas of Interest */}
          <div className="lg:col-span-6 grid grid-cols-1 gap-3.5 sm:gap-4">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1 flex items-center gap-2.5">
              <Brain className="w-5 h-5 text-cyan-400 shrink-0" />
              <span>Areas of Interest</span>
            </h3>
            {interestsData.map((item, idx) => {
              const IconComp = interestIcons[item.icon] || Code2;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="glass-panel glass-panel-hover rounded-xl p-4 sm:p-5 border border-slate-800 flex items-start gap-3.5 sm:gap-4"
                >
                  <div className="p-2.5 sm:p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 text-cyan-400 shrink-0">
                    <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Education Timeline Cards */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-2.5 justify-center">
            <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 shrink-0" />
            <span>Academic History</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {educationData.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="glass-panel glass-panel-hover rounded-2xl p-5 sm:p-6 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-[11px] font-mono text-cyan-300 font-semibold">
                      {edu.period}
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                      {edu.score}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white mb-2 leading-snug">
                    {edu.degree}
                  </h4>

                  <p className="text-xs font-medium text-cyan-400 mb-1">{edu.institution}</p>
                  <p className="text-xs text-slate-500 mb-3 sm:mb-4">{edu.location}</p>

                  <p className="text-xs text-slate-400 leading-relaxed">{edu.details}</p>
                </div>

                <div className="mt-4 pt-3.5 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Verified Credentials</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
