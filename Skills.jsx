import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Coffee, FileCode, Cpu, Zap, Globe, Smartphone, Server, 
  Network, Database, Layers, GitBranch, HardDrive, Sparkles, MessageSquare, 
  Brain, ShieldCheck 
} from 'lucide-react';
import { skillsData } from './portfolioData.js';

const iconMap = {
  Coffee, FileCode, Cpu, Zap, Globe, Smartphone, Server, Network,
  Database, Layers, GitBranch, HardDrive
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Tech' },
    { id: 'programming', label: 'Languages' },
    { id: 'webAndMobile', label: 'Web & Mobile' },
    { id: 'databasesAndTools', label: 'Databases & Tools' }
  ];

  return (
    <section id="skills" className="py-16 sm:py-24 relative bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient">Proficiency</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Core technical stack spanning programming languages, modern frameworks, mobile dev, databases, and soft skills.
          </p>
        </div>

        {/* Filter Tabs - Horizontally Scrollable on Mobile */}
        <div className="flex justify-start sm:justify-center overflow-x-auto no-scrollbar pb-2 mb-8 sm:mb-12 max-w-full px-1">
          <div className="inline-flex p-1.5 rounded-xl bg-slate-900 border border-slate-800 gap-1 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-all min-h-[40px] flex items-center ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-md'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Technical Skill Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 mb-12 sm:mb-16">
          {(activeCategory === 'all' || activeCategory === 'programming' ? skillsData.programming : []).map((skill, idx) => {
            const IconComp = iconMap[skill.icon] || Code;
            return (
              <SkillCard key={`prog-${idx}`} skill={skill} IconComp={IconComp} category="Programming" index={idx} />
            );
          })}

          {(activeCategory === 'all' || activeCategory === 'webAndMobile' ? skillsData.webAndMobile : []).map((skill, idx) => {
            const IconComp = iconMap[skill.icon] || Globe;
            return (
              <SkillCard key={`web-${idx}`} skill={skill} IconComp={IconComp} category="Web & Mobile" index={idx} />
            );
          })}

          {(activeCategory === 'all' || activeCategory === 'databasesAndTools' ? skillsData.databasesAndTools : []).map((skill, idx) => {
            const IconComp = iconMap[skill.icon] || Database;
            return (
              <SkillCard key={`db-${idx}`} skill={skill} IconComp={IconComp} category="Tools & DB" index={idx} />
            );
          })}
        </div>

        {/* Soft Skills & Problem Solving Spotlight */}
        <div className="glass-panel rounded-2xl p-5 sm:p-8 border border-slate-800">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-5 sm:mb-6 flex items-center gap-2.5">
            <Brain className="w-5 h-5 text-cyan-400 shrink-0" />
            <span>Soft Skills & Professional Competencies</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {skillsData.softSkills.map((soft, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between hover:border-cyan-500/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-100">{soft.name}</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{soft.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function SkillCard({ skill, IconComp, category, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="glass-panel glass-panel-hover rounded-xl p-4 sm:p-5 border border-slate-800/90 flex items-center gap-3.5 sm:gap-4 group cursor-pointer active:scale-[0.99]"
    >
      <div className={`p-2.5 sm:p-3 rounded-xl bg-gradient-to-br ${skill.color} text-white shadow-md shrink-0 transition-transform group-hover:scale-110`}>
        <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
      </div>

      <div className="flex flex-col flex-grow min-w-0">
        <div className="flex items-center justify-between gap-1 mb-1">
          <span className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors truncate">
            {skill.name}
          </span>
        </div>
        <div className="flex items-center justify-between gap-1 text-xs text-slate-400">
          <span className="text-[10px] font-mono text-slate-500 truncate">{category}</span>
          <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-cyan-300 shrink-0">
            {skill.level}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
