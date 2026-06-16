import React from "react";
import { motion } from "framer-motion";
import { Compass, Sparkles, BookOpen, CheckCircle } from "lucide-react";
import { profileData } from "../data/profile";

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      
      {/* Decorative ambient background blur */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] rounded-full blur-[100px] opacity-[0.05] bg-accent-violet pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-accent-violet/20 bg-accent-violet/5 text-accent-violet text-xs font-semibold tracking-wider font-mono uppercase mb-4"
          >
            <Sparkles size={12} />
            Background
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-outfit text-white tracking-tight"
          >
            Professional Persona
          </motion.h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-accent-violet to-accent-cyan mt-4 rounded-full" />
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          
          {/* Main Biography Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 glass-panel p-8 md:p-10 rounded-3xl border border-white/5 relative overflow-hidden flex flex-col justify-between"
          >
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-accent-indigo/10 to-transparent blur-2xl pointer-events-none" />
            
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-bold font-outfit text-white flex items-center gap-3">
                <BookOpen className="text-accent-indigo" size={20} />
                About Me
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base font-inter">
                {profileData.about.summary}
              </p>
            </div>

            {/* Philosophy quote */}
            <div className="mt-8 pt-8 border-t border-white/5">
              <p className="text-xs font-mono text-accent-cyan uppercase tracking-wider mb-2">My Philosophy</p>
              <blockquote className="text-base md:text-lg italic text-gray-200 border-l-2 border-accent-cyan pl-4 leading-relaxed font-outfit">
                "{profileData.about.philosophy}"
              </blockquote>
            </div>
          </motion.div>

          {/* Side Cards: Strengths & Goals */}
          <div className="lg:col-span-4 flex flex-col gap-6 md:gap-8">
            
            {/* Strengths Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel p-6 md:p-8 rounded-3xl border border-white/5 relative overflow-hidden flex-1"
            >
              <div className="space-y-5">
                <h3 className="text-lg font-bold font-outfit text-white flex items-center gap-2">
                  <Sparkles className="text-accent-cyan" size={18} />
                  Core Strengths
                </h3>
                <ul className="space-y-3">
                  {profileData.about.strengths.map((strength, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.4 }}
                      className="flex items-start gap-2.5 text-xs md:text-sm text-gray-300 font-inter"
                    >
                      <CheckCircle className="text-accent-cyan mt-0.5 shrink-0" size={14} />
                      <span>{strength}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Career Goals Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="glass-panel p-6 md:p-8 rounded-3xl border border-white/5 relative overflow-hidden flex-1"
            >
              <div className="space-y-4">
                <h3 className="text-lg font-bold font-outfit text-white flex items-center gap-2">
                  <Compass className="text-accent-violet" size={18} />
                  Career Vision
                </h3>
                <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-inter">
                  {profileData.about.careerGoals}
                </p>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};
export default About;
