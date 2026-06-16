import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Copy, Check, Globe, Send } from "lucide-react";
import { profileData } from "../data/profile";

const GithubIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TwitterIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
  </svg>
);

export const Contact: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden bg-bg-dark/20">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] h-[350px] rounded-full blur-[120px] opacity-[0.04] bg-accent-cyan pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[300px] h-[300px] rounded-full blur-[100px] opacity-[0.03] bg-accent-violet pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-accent-indigo/20 bg-accent-indigo/5 text-accent-indigo text-xs font-semibold tracking-wider font-mono uppercase mb-4"
          >
            <Send size={12} />
            Connect
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-outfit text-white tracking-tight"
          >
            Start A Conversation
          </motion.h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-accent-indigo to-accent-cyan mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 glass-panel p-8 rounded-3xl border border-white/5 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-accent-cyan/5 to-transparent blur-xl pointer-events-none" />

            <div className="space-y-8">
              <div className="space-y-3">
                <h3 className="text-xl font-bold font-outfit text-white">Contact Info</h3>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-inter">
                  Reach out directly to copy contact details to your clipboard, or follow my professional networks below.
                </p>
              </div>

              {/* Direct Details with Copy Buttons */}
              <div className="space-y-4">
                
                {/* Email */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5 group hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="p-2.5 rounded-xl bg-white/5 text-accent-cyan shrink-0">
                      <Mail size={16} />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-mono text-gray-500 uppercase tracking-wider font-semibold">Email</span>
                      <span className="block text-xs md:text-sm text-white font-medium truncate font-mono">{profileData.email}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(profileData.email, "email")}
                    className="p-2.5 rounded-xl border border-white/5 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer shrink-0"
                    title="Copy Email"
                  >
                    {copiedType === "email" ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5 group hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="p-2.5 rounded-xl bg-white/5 text-accent-indigo shrink-0">
                      <Phone size={16} />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-mono text-gray-500 uppercase tracking-wider font-semibold">Phone</span>
                      <span className="block text-xs md:text-sm text-white font-medium truncate font-mono">{profileData.phone}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(profileData.phone, "phone")}
                    className="p-2.5 rounded-xl border border-white/5 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer shrink-0"
                    title="Copy Phone"
                  >
                    {copiedType === "phone" ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.02] border border-white/5 group">
                  <div className="p-2.5 rounded-xl bg-white/5 text-accent-violet shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-gray-500 uppercase tracking-wider font-semibold">Location</span>
                    <span className="block text-xs md:text-sm text-white font-medium font-outfit">{profileData.location}</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Grid */}
            <div className="mt-8 pt-8 border-t border-white/5">
              <span className="block text-[10px] font-mono text-gray-500 uppercase tracking-wider font-semibold mb-4">Networks</span>
              <div className="grid grid-cols-4 gap-3">
                <a 
                  href={profileData.socials.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-col items-center justify-center p-3 rounded-2xl border border-white/5 bg-white/[0.01] text-gray-400 hover:text-white hover:bg-white/5 hover:border-white/10 transition-all duration-300"
                >
                  <GithubIcon size={18} />
                </a>
                <a 
                  href={profileData.socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-col items-center justify-center p-3 rounded-2xl border border-white/5 bg-white/[0.01] text-gray-400 hover:text-white hover:bg-white/5 hover:border-white/10 transition-all duration-300"
                >
                  <LinkedinIcon size={18} />
                </a>
                {profileData.socials.twitter && (
                  <a 
                    href={profileData.socials.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex flex-col items-center justify-center p-3 rounded-2xl border border-white/5 bg-white/[0.01] text-gray-400 hover:text-white hover:bg-white/5 hover:border-white/10 transition-all duration-300"
                  >
                    <TwitterIcon size={18} />
                  </a>
                )}
                <a 
                  href={profileData.socials.portfolio} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-col items-center justify-center p-3 rounded-2xl border border-white/5 bg-white/[0.01] text-gray-400 hover:text-white hover:bg-white/5 hover:border-white/10 transition-all duration-300"
                >
                  <Globe size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Interactive Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-white/5 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute bottom-0 right-0 w-36 h-36 bg-gradient-to-tr from-accent-indigo/5 to-transparent blur-xl pointer-events-none" />

            <form onSubmit={handleSubmit} className="space-y-5 z-10 relative">
              <div className="space-y-1">
                <h3 className="text-xl font-bold font-outfit text-white">Send a Message</h3>
                <p className="text-xs md:text-sm text-gray-400 font-inter">Let's collaborate on your next premium digital experience.</p>
              </div>

              {/* Name Input */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-gray-400 uppercase tracking-wider font-semibold">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-white/5 bg-white/5 text-sm font-outfit text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan focus:bg-white/[0.08] transition-all"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-gray-400 uppercase tracking-wider font-semibold">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-white/5 bg-white/5 text-sm font-outfit text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan focus:bg-white/[0.08] transition-all"
                />
              </div>

              {/* Message Input */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-gray-400 uppercase tracking-wider font-semibold">Your Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project or opportunity..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-white/5 bg-white/5 text-sm font-outfit text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan focus:bg-white/[0.08] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={formSubmitted}
                className="w-full py-4 rounded-xl font-semibold font-outfit text-xs md:text-sm tracking-wider text-black bg-white hover:bg-[#eaeaea] disabled:bg-gray-700 disabled:text-gray-400 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-white/5"
              >
                <Send size={14} />
                {formSubmitted ? "Sending Message..." : "Submit Inquiry"}
              </button>
            </form>

            {/* Form submission toast overlay */}
            <AnimatePresence>
              {formSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute inset-0 bg-[#050816]/95 flex flex-col justify-center items-center p-6 text-center z-20"
                >
                  <div className="w-14 h-14 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 flex items-center justify-center mb-4">
                    <Check size={26} />
                  </div>
                  <h4 className="text-lg font-bold font-outfit text-white mb-2">Message Received</h4>
                  <p className="text-xs md:text-sm text-gray-400 max-w-xs leading-relaxed font-inter">
                    Thank you, {name}! Your message has been sent successfully. I will get back to you within 24 hours.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
export default Contact;
