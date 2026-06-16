import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, FileText, ChevronDown } from "lucide-react";
import { profileData } from "../data/profile";
import heroImg from "../assets/hero.png";

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

// Simple typing animation container variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // High-performance canvas particle system
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    const particleCount = Math.min(Math.floor((width * height) / 15000), 75);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(139, 92, 246, 0.05)";
      
      // Draw and update particles
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(99, 102, 241, 0.25)";
        ctx.fill();

        // Draw connecting lines
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.15 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handlePrint = (e: React.MouseEvent) => {
    e.preventDefault();
    window.print();
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-24"
    >
      {/* Background Interactive Particles */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 pointer-events-none z-0 opacity-80"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Hero Left Content */}
        <motion.div 
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Welcome Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-cyan/20 bg-accent-cyan/5 text-accent-cyan text-xs font-semibold tracking-wider font-mono uppercase"
            variants={itemVariants}
          >
            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
            Available for Select Projects
          </motion.div>

          {/* Name & Title */}
          <div className="space-y-2">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight font-outfit text-white leading-tight"
              variants={itemVariants}
            >
              Hi, I'm{" "}
              <span className="text-gradient-purple-blue">
                {profileData.fullName}
              </span>
            </motion.h1>
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl font-semibold font-outfit text-gray-300 tracking-wide"
              variants={itemVariants}
            >
              {profileData.title}
            </motion.h2>
          </div>

          {/* Tagline */}
          <motion.p 
            className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed"
            variants={itemVariants}
          >
            {profileData.tagline}
          </motion.p>

          {/* Action CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            variants={itemVariants}
          >
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold font-outfit text-sm tracking-wider text-black bg-white hover:bg-[#eaeaea] transition-all duration-300 text-center shadow-lg shadow-white/5"
            >
              Contact Me
            </a>
            
            <a
              href="#"
              onClick={handlePrint}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold font-outfit text-sm tracking-wider text-white border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center"
            >
              <FileText size={16} />
              Download CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex items-center gap-6 pt-4"
            variants={itemVariants}
          >
            <a 
              href={profileData.socials.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full border border-white/5 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/15 transition-all duration-300"
            >
              <GithubIcon size={20} />
            </a>
            <a 
              href={profileData.socials.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full border border-white/5 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/15 transition-all duration-300"
            >
              <LinkedinIcon size={20} />
            </a>
            {profileData.socials.twitter && (
              <a 
                href={profileData.socials.twitter} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full border border-white/5 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/15 transition-all duration-300"
              >
                <TwitterIcon size={20} />
              </a>
            )}
            <a 
              href={`mailto:${profileData.email}`} 
              className="p-3 rounded-full border border-white/5 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/15 transition-all duration-300"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Hero Right Content - Profile Image */}
        <motion.div 
          className="lg:col-span-5 flex justify-center items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            
            {/* Rotating Glow Ring */}
            <motion.div 
              className="absolute inset-0 rounded-full border border-dashed border-accent-indigo/60 p-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />

            {/* Glowing Orb Overlay */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-accent-violet/30 via-accent-cyan/15 to-transparent blur-md" />

            {/* Image Border Container */}
            <div className="absolute inset-4 rounded-full p-[2px] bg-gradient-to-tr from-accent-violet via-accent-cyan to-accent-blue shadow-2xl shadow-accent-indigo/25 overflow-hidden">
              <div className="w-full h-full rounded-full bg-[#0b1020] overflow-hidden relative group">
                <img 
                  src={heroImg} 
                  alt={profileData.fullName}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    // Fallback in case the asset is missing
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const fallback = document.createElement('div');
                      fallback.className = 'w-full h-full flex items-center justify-center bg-gradient-to-tr from-[#0b1020] to-[#111827] text-white text-7xl font-extrabold font-outfit';
                      fallback.innerText = 'K';
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
            </div>

            {/* Micro Badge floating indicators */}
            <motion.div 
              className="absolute -top-2 right-8 glass-panel px-4 py-2 rounded-2xl flex items-center gap-2 border border-white/10 shadow-lg"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-lg">🤖</span>
              <span className="text-[10px] font-bold tracking-wider text-gray-300 font-mono uppercase">AI Native</span>
            </motion.div>

            <motion.div 
              className="absolute -bottom-2 left-6 glass-panel px-4 py-2 rounded-2xl flex items-center gap-2 border border-white/10 shadow-lg"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <span className="text-lg">🚀</span>
              <span className="text-[10px] font-bold tracking-wider text-gray-300 font-mono uppercase">Full Stack</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
        <a 
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex flex-col items-center text-xs tracking-widest uppercase font-mono text-gray-400"
        >
          <span>Explore</span>
          <motion.div 
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="mt-1"
          >
            <ChevronDown size={14} className="text-accent-cyan" />
          </motion.div>
        </a>
      </div>
    </section>
  );
};
export default Hero;
