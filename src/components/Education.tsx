import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";
import { profileData } from "../data/profile";

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-24 md:py-32 overflow-hidden bg-bg-dark/10">
      
      {/* Decorative ambient background light */}
      <div className="absolute top-1/2 left-1/10 w-[250px] h-[250px] rounded-full blur-[100px] opacity-[0.03] bg-accent-violet pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-accent-violet/20 bg-accent-violet/5 text-accent-violet text-xs font-semibold tracking-wider font-mono uppercase mb-4"
          >
            <GraduationCap size={12} />
            Academic
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-outfit text-white tracking-tight"
          >
            Education & Coursework
          </motion.h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-accent-violet to-accent-indigo mt-4 rounded-full" />
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {profileData.education.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.15 }}
              className="glass-panel p-6 md:p-8 rounded-3xl border border-white/5 hover:border-white/10 relative overflow-hidden group transition-all duration-300"
            >
              {/* Inner ambient glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-accent-violet/5 to-transparent blur-xl pointer-events-none" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div className="space-y-2.5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-accent-violet">
                    <Calendar size={12} />
                    {edu.year}
                  </span>
                  
                  <h3 className="text-xl font-bold font-outfit text-white group-hover:text-accent-violet transition-colors">
                    {edu.degree}
                  </h3>
                  
                  <h4 className="text-base font-medium font-outfit text-gray-300">
                    {edu.institution}
                  </h4>
                </div>

                {/* Score / Grade box */}
                <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/5 self-start">
                  <Award size={16} className="text-accent-cyan" />
                  <div className="text-xs font-mono">
                    <span className="text-gray-400">Score: </span>
                    <span className="text-white font-semibold">{edu.score}</span>
                  </div>
                </div>
              </div>

              {/* Coursework Section */}
              <div className="pt-6 border-t border-white/5">
                <h5 className="text-xs font-mono text-gray-300 uppercase tracking-wider mb-4 font-semibold flex items-center gap-1.5">
                  <BookOpen size={13} className="text-accent-cyan" />
                  Key Academic Subjects
                </h5>
                
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <span 
                      key={course}
                      className="text-xs font-inter text-gray-300 px-3 py-1 rounded-xl border border-white/5 bg-white/5 hover:border-white/10 transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Education;
