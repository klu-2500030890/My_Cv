import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, FolderCode, Sparkles, Cpu, BarChart3, Palette, Search } from "lucide-react";
import { profileData } from "../data/profile";

const GithubIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

// Render interactive visual mocks for projects based on title
const renderProjectGraphic = (title: string) => {
  if (title.includes("NovaAgent")) {
    return (
      <div className="w-full h-full relative overflow-hidden bg-[#0a0f1d] flex items-center justify-center border-b border-white/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        {/* Agent Node Flowchart */}
        <div className="relative flex items-center justify-between gap-6 z-10 w-[80%]">
          <motion.div 
            className="w-12 h-12 rounded-xl border border-accent-violet/30 bg-accent-violet/10 flex items-center justify-center text-accent-violet shadow-[0_0_15px_rgba(139,92,246,0.2)]"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Cpu size={20} />
          </motion.div>
          
          <div className="flex-1 relative flex items-center justify-center">
            <svg width="100%" height="20" className="overflow-visible">
              <motion.line 
                x1="0%" y1="10" x2="100%" y2="10" 
                stroke="rgba(6, 182, 212, 0.4)" 
                strokeWidth="1.5" 
                strokeDasharray="5,5"
                animate={{ strokeDashoffset: [-20, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </svg>
          </div>

          <motion.div 
            className="w-12 h-12 rounded-xl border border-accent-cyan/30 bg-accent-cyan/10 flex items-center justify-center text-accent-cyan shadow-[0_0_15px_rgba(6,182,212,0.2)]"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          >
            <span className="font-mono text-xs font-bold">LLM</span>
          </motion.div>
        </div>
        
        {/* Floating Code Snippet Overlay */}
        <div className="absolute bottom-2 left-4 right-4 glass-panel border border-white/5 p-2 rounded-lg text-[8px] font-mono text-gray-500 flex justify-between items-center">
          <span>const agent = new Agent('Nova');</span>
          <span className="text-accent-cyan">Active</span>
        </div>
      </div>
    );
  }

  if (title.includes("Veritas")) {
    return (
      <div className="w-full h-full relative overflow-hidden bg-[#070b16] flex items-center justify-center border-b border-white/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
        
        {/* Animated Analytics Line Chart */}
        <div className="w-[85%] h-[60%] flex items-end justify-between gap-1 z-10">
          {[40, 65, 35, 85, 50, 70, 95, 45, 60, 80].map((h, i) => (
            <motion.div
              key={i}
              className="w-full rounded-t-sm bg-gradient-to-t from-accent-indigo via-accent-cyan to-transparent opacity-80"
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut", delay: i * 0.05 }}
            />
          ))}
        </div>

        <div className="absolute top-3 right-4 flex items-center gap-1.5 text-[10px] font-mono text-accent-cyan bg-accent-cyan/5 border border-accent-cyan/20 px-2 py-0.5 rounded-full">
          <BarChart3 size={10} />
          98.2k req/s
        </div>
      </div>
    );
  }

  if (title.includes("AuraUI")) {
    return (
      <div className="w-full h-full relative overflow-hidden bg-[#090b14] flex items-center justify-center border-b border-white/5">
        
        {/* Grid of design components */}
        <div className="grid grid-cols-2 gap-3 w-[80%] z-10">
          <div className="glass-panel border border-white/5 p-2 rounded-lg flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-accent-cyan animate-pulse" />
            <div className="h-1.5 w-12 bg-white/10 rounded" />
          </div>
          <div className="bg-gradient-to-r from-accent-violet to-accent-indigo text-white p-2 rounded-lg flex items-center justify-center gap-1 shadow-md shadow-accent-indigo/15">
            <Palette size={10} />
            <div className="h-1.5 w-8 bg-white/20 rounded" />
          </div>
          <div className="glass-panel border border-white/10 p-2 rounded-lg flex flex-col gap-1.5 col-span-2">
            <div className="h-1 w-[90%] bg-white/10 rounded" />
            <div className="h-1 w-[40%] bg-accent-cyan/70 rounded" />
          </div>
        </div>
      </div>
    );
  }

  if (title.includes("Cognitive")) {
    return (
      <div className="w-full h-full relative overflow-hidden bg-[#0a0f1d] flex flex-col justify-center items-center px-6 border-b border-white/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        {/* Mock Search Portal */}
        <div className="w-full glass-panel border border-white/10 rounded-xl p-2.5 flex items-center gap-2 mb-3 z-10">
          <Search size={12} className="text-gray-400" />
          <motion.div 
            className="text-[9px] text-white font-mono"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            semantic retrieval...
          </motion.div>
        </div>

        {/* Results row list */}
        <div className="w-full flex flex-col gap-1.5 z-10">
          <div className="h-2 w-[70%] bg-white/10 rounded" />
          <div className="h-2 w-[90%] bg-white/5 rounded" />
        </div>
      </div>
    );
  }

  // Fallback abstract gradient mesh
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#0c1020] via-accent-violet/5 to-[#161a30] relative overflow-hidden flex items-center justify-center border-b border-white/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <FolderCode size={40} className="text-white/10" />
    </div>
  );
};

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden bg-bg-dark/20">
      
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/10 w-[300px] h-[300px] rounded-full blur-[120px] opacity-[0.03] bg-accent-cyan pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-accent-cyan/20 bg-accent-cyan/5 text-accent-cyan text-xs font-semibold tracking-wider font-mono uppercase mb-4"
          >
            <FolderCode size={12} />
            Works
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-outfit text-white tracking-tight"
          >
            Featured Engineering Projects
          </motion.h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-accent-cyan to-accent-violet mt-4 rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {profileData.projects.map((proj, idx) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
              className="glass-panel rounded-3xl border border-white/5 hover:border-white/10 overflow-hidden flex flex-col justify-between group relative transition-all duration-300 hover:shadow-2xl hover:shadow-accent-indigo/10"
            >
              {/* Project Card Header Visual */}
              <div className="h-48 sm:h-56 w-full relative">
                {renderProjectGraphic(proj.title)}
                
                {/* Floating Top Featured Badge */}
                {proj.featured && (
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-1 px-2.5 py-1 rounded-full border border-yellow-500/20 bg-yellow-500/10 text-yellow-500 text-[10px] font-bold tracking-wider font-mono uppercase shadow-md shadow-yellow-500/5">
                    <Sparkles size={10} />
                    Featured
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-outfit text-white group-hover:text-accent-cyan transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-inter">
                    {proj.description}
                  </p>
                </div>

                {/* Tech tags and links */}
                <div className="mt-6 space-y-5">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="text-[10px] font-mono font-semibold text-gray-300 px-2 py-0.5 rounded border border-white/5 bg-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-white/5 text-xs font-semibold font-outfit">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors"
                    >
                      <GithubIcon size={14} />
                      Source Code
                    </a>
                    
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-accent-cyan hover:text-accent-cyan/80 transition-colors"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Projects;
