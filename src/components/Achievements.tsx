import React from "react";
import { motion } from "framer-motion";
import { Trophy, TrendingUp, Users, BookOpen, Star, Sparkles } from "lucide-react";
import { profileData } from "../data/profile";

// Match categories to icons
const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Competition": return <Trophy size={20} className="text-amber-400" />;
    case "Publication": return <BookOpen size={20} className="text-accent-cyan" />;
    case "Leadership": return <Users size={20} className="text-accent-indigo" />;
    default: return <Trophy size={20} className="text-white" />;
  }
};

// Simple animated counter or scale reveal for numbers
const StatDisplay: React.FC<{ value: string; label: string }> = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-center flex-1">
      <motion.span 
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
        className="text-3xl md:text-4xl font-extrabold font-outfit text-gradient-purple-blue mb-1"
      >
        {value}
      </motion.span>
      <span className="text-[10px] md:text-xs font-mono text-gray-500 uppercase tracking-widest font-semibold">
        {label}
      </span>
    </div>
  );
};

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="relative py-24 md:py-32 overflow-hidden">
      
      {/* Decorative ambient background blur */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[350px] h-[350px] rounded-full blur-[100px] opacity-[0.03] bg-accent-indigo pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-accent-cyan/20 bg-accent-cyan/5 text-accent-cyan text-xs font-semibold tracking-wider font-mono uppercase mb-4"
          >
            <Trophy size={12} />
            Highlights
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-outfit text-white tracking-tight"
          >
            Key Industry Milestones
          </motion.h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-accent-cyan to-accent-violet mt-4 rounded-full" />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main List Column */}
          <div className="lg:col-span-7 space-y-6">
            {profileData.achievements.map((ach, idx) => (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.15 }}
                className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/10 flex items-start gap-4 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Visual Category Icon */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 group-hover:border-white/10 transition-colors shrink-0">
                  {getCategoryIcon(ach.category)}
                </div>

                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base md:text-lg font-bold font-outfit text-white group-hover:text-accent-cyan transition-colors">
                      {ach.title}
                    </h3>
                    
                    {/* Badge */}
                    <span className="text-[9px] font-mono font-bold tracking-wider text-gray-400 bg-white/5 border border-white/5 px-2 py-0.5 rounded-md uppercase">
                      {ach.category}
                    </span>
                  </div>

                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-inter">
                    {ach.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Display Panel Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between gap-5 glass-panel p-6 md:p-8 rounded-3xl border border-white/5 relative overflow-hidden"
          >
            {/* Ambient Background Radial Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0%,transparent_70%)] pointer-events-none" />

            <div className="space-y-2 z-10 relative">
              <h3 className="text-lg font-bold font-outfit text-white flex items-center gap-2">
                <Sparkles size={16} className="text-accent-cyan" />
                Quantifiable Impact
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-inter">
                Demonstrated performance metrics achieved through open-source contributions, scientific research, and national competition victories.
              </p>
            </div>

            {/* Render Stat cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 z-10 relative mt-6 lg:mt-0">
              {profileData.achievements
                .filter((a) => a.stat)
                .map((ach, idx) => (
                  <StatDisplay 
                    key={idx}
                    value={ach.stat!.value} 
                    label={ach.stat!.label} 
                  />
                ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
export default Achievements;
