import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Award, CheckCircle2 } from "lucide-react";
import { profileData } from "../data/profile";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 md:py-32 overflow-hidden">
      
      {/* Decorative ambient glow */}
      <div className="absolute top-1/3 right-1/10 w-[300px] h-[300px] rounded-full blur-[100px] opacity-[0.03] bg-accent-indigo pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-accent-indigo/20 bg-accent-indigo/5 text-accent-indigo text-xs font-semibold tracking-wider font-mono uppercase mb-4"
          >
            <Briefcase size={12} />
            History
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-outfit text-white tracking-tight"
          >
            Work Experience
          </motion.h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-accent-indigo to-accent-cyan mt-4 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-white/5 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:top-0 md:before:bottom-0 md:before:w-[2px] md:before:bg-gradient-to-b md:before:from-accent-violet md:before:via-accent-cyan md:before:to-white/5">
          
          {profileData.experience.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={idx}
                className="relative pl-8 pb-16 md:pl-0 md:pb-24 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 last:pb-0"
              >
                {/* Connector Dot */}
                <div className="absolute left-[-7px] top-1.5 md:left-1/2 md:translate-x-[-50%] z-20 flex items-center justify-center">
                  <motion.div 
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-[12px] h-[12px] rounded-full bg-[#050816] border-2 border-accent-cyan ring-4 ring-accent-cyan/15 soft-glow-cyan"
                  />
                </div>

                {/* Timeline Card */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative ${
                    isEven 
                      ? "md:col-start-1 md:text-right md:items-end" 
                      : "md:col-start-2"
                  } flex flex-col`}
                >
                  <div className="glass-panel p-6 md:p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-300 w-full group relative overflow-hidden">
                    {/* Corner gradient light */}
                    <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-accent-cyan/5 to-transparent blur-xl pointer-events-none" />
                    
                    {/* Header info */}
                    <div className={`flex flex-col gap-2 mb-4 ${isEven ? "md:items-end" : ""}`}>
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-semibold text-accent-cyan">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {exp.duration}
                        </span>
                        <span className="text-gray-600">•</span>
                        <span className="flex items-center gap-1">
                          <MapPin size={12} />
                          {exp.location}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold font-outfit text-white group-hover:text-accent-cyan transition-colors">
                        {exp.role}
                      </h3>
                      
                      <h4 className="text-sm font-semibold font-outfit text-gray-400">
                        {exp.company}
                      </h4>
                    </div>

                    <p className="text-xs md:text-sm text-gray-400 leading-relaxed mb-6 font-inter">
                      {exp.description}
                    </p>

                    {/* Responsibilities list */}
                    <div className="mb-6">
                      <h5 className={`text-xs font-mono text-gray-300 uppercase tracking-wider mb-3 font-semibold ${isEven ? "md:text-right" : ""}`}>
                        Key Responsibilities
                      </h5>
                      <ul className={`space-y-2.5 ${isEven ? "md:items-end flex flex-col" : ""}`}>
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li 
                            key={rIdx} 
                            className={`flex items-start gap-2 text-xs md:text-sm text-gray-300 font-inter ${isEven ? "md:flex-row-reverse md:text-right" : ""}`}
                          >
                            <CheckCircle2 className="text-accent-indigo mt-0.5 shrink-0" size={13} />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements badge block */}
                    {exp.achievements.length > 0 && (
                      <div className="pt-4 border-t border-white/5">
                        <h5 className={`text-xs font-mono text-accent-cyan uppercase tracking-wider mb-3 font-semibold flex items-center gap-1.5 ${isEven ? "md:justify-end" : ""}`}>
                          <Award size={13} />
                          Key Accomplishments
                        </h5>
                        <ul className={`space-y-2 ${isEven ? "md:items-end flex flex-col" : ""}`}>
                          {exp.achievements.map((ach, aIdx) => (
                            <li 
                              key={aIdx} 
                              className={`text-xs md:text-sm text-white font-medium pl-3 border-l border-accent-cyan/40 leading-relaxed font-inter ${
                                isEven ? "md:border-l-0 md:border-r md:pl-0 md:pr-3 md:text-right" : ""
                              }`}
                            >
                              {ach}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
export default Experience;
