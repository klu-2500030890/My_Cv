import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { profileData } from "../data/profile";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Interests", href: "#interests" },
  { label: "Contact", href: "#contact" }
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Monitor scroll height to apply dense glass style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer to update active navigation links
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // triggers when section is in middle of viewport
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    navLinks.forEach((link) => {
      const el = document.getElementById(link.href.substring(1));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "py-4 bg-[#050816]/75 backdrop-blur-md border-b border-white/5" 
            : "py-6 bg-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); handleLinkClick("#home"); }}
            className="font-outfit text-xl font-bold tracking-widest text-white hover:text-accent-indigo transition-colors"
          >
            {profileData.fullName.toUpperCase()}
            <span className="text-accent-cyan">.</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-white/5 border border-white/5 p-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                  className={`relative px-4 py-1.5 text-xs font-medium tracking-wide rounded-full transition-all duration-300 font-outfit ${
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-accent-violet to-accent-indigo rounded-full -z-10 shadow-lg shadow-accent-indigo/25"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* CTA Link (e.g. Hire Me / Portfolio) */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleLinkClick("#contact"); }}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider font-outfit border border-accent-indigo/40 bg-accent-indigo/10 hover:bg-accent-indigo hover:border-accent-indigo text-white transition-all duration-300 shadow-md shadow-accent-indigo/10"
            >
              Hire Me
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden bg-[#050816]/95 backdrop-blur-xl flex flex-col justify-center px-8 md:px-16"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", bounce: 0.1, duration: 0.5 }}
          >
            <div className="flex flex-col gap-6 font-outfit text-2xl md:text-3xl font-semibold">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.href;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                    className={`flex items-center gap-2 transition-colors ${
                      isActive ? "text-accent-cyan" : "text-gray-400 hover:text-white"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <span className="text-sm font-mono text-accent-violet">0{idx + 1}.</span>
                    {link.label}
                  </motion.a>
                );
              })}
            </div>
            
            <motion.div 
              className="mt-12 pt-8 border-t border-white/10 flex flex-col gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-xs tracking-wider text-gray-500 uppercase font-mono">Get in touch</p>
              <a href={`mailto:${profileData.email}`} className="text-lg text-white font-outfit hover:text-accent-indigo transition-colors">
                {profileData.email}
              </a>
              <a href={`tel:${profileData.phone}`} className="text-lg text-white font-outfit hover:text-accent-indigo transition-colors">
                {profileData.phone}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Navbar;
