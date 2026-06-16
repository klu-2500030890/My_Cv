import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { profileData } from "../data/profile";

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="relative py-24 md:py-32 overflow-hidden bg-bg-dark/15">
      
      {/* Background ambient orbs */}
      <div className="absolute top-1/3 right-1/4 w-[250px] h-[250px] rounded-full blur-[100px] opacity-[0.03] bg-accent-cyan pointer-events-none" />

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
            <Award size={12} />
            Credentials
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-outfit text-white tracking-tight"
          >
            Professional Certifications
          </motion.h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-accent-cyan to-accent-indigo mt-4 rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profileData.certifications.map((cert, idx) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/12 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-accent-indigo/5"
            >
              {/* Card visual detail */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent-cyan/5 to-transparent blur-md pointer-events-none" />

              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-accent-cyan group-hover:text-white group-hover:bg-accent-cyan transition-all duration-300">
                    <Award size={20} />
                  </div>
                  <span className="flex items-center gap-1 text-[10px] font-mono font-semibold text-gray-500">
                    <Calendar size={10} />
                    {cert.date}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-base font-bold font-outfit text-white group-hover:text-accent-cyan transition-colors line-clamp-2">
                    {cert.name}
                  </h3>
                  <p className="text-xs font-semibold text-gray-400 font-outfit">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Verify credentials button */}
              <div className="mt-6 pt-4 border-t border-white/5">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold font-outfit text-accent-cyan hover:text-white transition-colors"
                >
                  Verify Credential
                  <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Certifications;
