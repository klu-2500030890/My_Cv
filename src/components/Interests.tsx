import React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { Sparkles, Heart } from "lucide-react";
import { profileData } from "../data/profile";

// Helper to resolve Lucide icons dynamically
const renderDynamicIcon = (iconName: string) => {
  // Fallback to Heart if icon name doesn't match
  const LucideIcon = (Icons as any)[iconName] || Icons.Heart;
  return <LucideIcon size={24} className="text-accent-indigo group-hover:text-accent-cyan transition-colors duration-300" />;
};

export const Interests: React.FC = () => {
  return (
    <section id="interests" className="relative py-24 md:py-32 overflow-hidden bg-bg-dark/10">
      
      {/* Ambient background glow */}
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full blur-[100px] opacity-[0.03] bg-accent-violet pointer-events-none" />

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
            <Heart size={12} />
            Lifestyle
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-outfit text-white tracking-tight"
          >
            Passions & Interests
          </motion.h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-accent-violet to-accent-indigo mt-4 rounded-full" />
        </div>

        {/* Interests Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profileData.interests.map((interest, idx) => (
            <motion.div
              key={interest.name}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/12 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-accent-indigo/5"
            >
              {/* Subtle mesh background on card hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-indigo/[0.01] to-accent-cyan/[0.01] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="space-y-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:border-accent-indigo/10 w-fit transition-all duration-300">
                  {renderDynamicIcon(interest.icon)}
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold font-outfit text-white group-hover:text-accent-cyan transition-colors">
                    {interest.name}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-inter">
                    {interest.description}
                  </p>
                </div>
              </div>

              {/* Action decoration */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-30 transition-opacity">
                <Sparkles size={14} className="text-accent-cyan" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Interests;
