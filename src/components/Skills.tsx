import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Layout, Server, Database, Cloud, Settings, Terminal, Activity } from "lucide-react";
import { profileData } from "../data/profile";

type CategoryType = "All" | "Frontend" | "Backend" | "AI" | "Cloud" | "Databases" | "DevOps" | "Tools";

const categories: CategoryType[] = ["All", "Frontend", "Backend", "AI", "Cloud", "Databases", "DevOps", "Tools"];

// Helper to match category with an icon
const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Frontend": return <Layout size={18} className="text-accent-violet" />;
    case "Backend": return <Server size={18} className="text-accent-indigo" />;
    case "AI": return <Cpu size={18} className="text-accent-cyan" />;
    case "Cloud": return <Cloud size={18} className="text-accent-blue" />;
    case "Databases": return <Database size={18} className="text-teal-400" />;
    case "DevOps": return <Settings size={18} className="text-rose-400" />;
    case "Tools": return <Terminal size={18} className="text-amber-400" />;
    default: return <Activity size={18} className="text-gray-400" />;
  }
};

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CategoryType>("All");

  const filteredSkills = profileData.skills.filter(
    (skill) => activeTab === "All" || skill.category === activeTab
  );

  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden bg-bg-dark/30">
      
      {/* Decorative ambient background blur */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] opacity-[0.04] bg-accent-cyan pointer-events-none" />

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
            <Cpu size={12} />
            Stack
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-outfit text-white tracking-tight"
          >
            Interactive Skill Showcase
          </motion.h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-accent-cyan to-accent-indigo mt-4 rounded-full" />
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center items-center gap-2 p-1.5 rounded-2xl glass-panel border border-white/5 max-w-4xl">
            {categories.map((cat) => {
              const isSelected = activeTab === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-4 py-2 text-xs md:text-sm font-medium rounded-xl transition-all duration-300 font-outfit cursor-pointer ${
                    isSelected ? "text-white shadow-lg" : "text-gray-400 hover:text-white"
                  } relative`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="activeSkillTabIndicator"
                      className="absolute inset-0 bg-white/5 border border-white/10 rounded-xl"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {cat !== "All" && getCategoryIcon(cat)}
                    {cat}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, idx) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 15 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/15 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-accent-indigo/5"
              >
                {/* Micro-glow background on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent-indigo/0 to-accent-cyan/0 group-hover:from-accent-indigo/[0.02] group-hover:to-accent-cyan/[0.02] transition-colors pointer-events-none" />

                <div className="space-y-4">
                  {/* Skill title & icon */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-white/5 border border-white/5 group-hover:border-white/10 transition-colors">
                        {getCategoryIcon(skill.category)}
                      </div>
                      <span className="font-semibold text-sm md:text-base font-outfit text-white group-hover:text-accent-cyan transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    
                    {/* Badge */}
                    <span className="font-mono text-xs text-gray-500 font-semibold px-2 py-0.5 rounded-md border border-white/5 bg-white/5">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Indicator */}
                  <div className="space-y-2">
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-accent-violet via-accent-indigo to-accent-cyan"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
                      />
                    </div>
                    <div className="flex justify-between text-[10px] font-mono text-gray-500">
                      <span>Beginner</span>
                      <span>Expert</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
export default Skills;
