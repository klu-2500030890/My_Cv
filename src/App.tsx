import React from "react";
import { Mail, Phone, MapPin, Award, BookOpen, Calendar, GraduationCap, Briefcase, Heart, Printer, CheckSquare } from "lucide-react";
import { profileData } from "./data/profile";
import heroImg from "./assets/hero.jpg";

// Custom Brand SVGs to avoid missing lucide exports
const GithubIcon: React.FC<{ size?: number; className?: string }> = ({ size = 13, className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon: React.FC<{ size?: number; className?: string }> = ({ size = 13, className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export const App: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  // Group skills by category to render them in organized blocks
  const skillsByCategory = profileData.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill.name);
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 py-10 print:py-0 relative selection:bg-indigo-600/30 selection:text-slate-900">
      
      {/* Floating Control Bar for Screen View */}
      <div className="no-print fixed top-6 right-6 z-50 flex items-center gap-3">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-5 py-3 rounded-full font-semibold font-outfit text-sm tracking-wider text-white bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-900/20 cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <Printer size={16} />
          Print / Download PDF
        </button>
      </div>

      {/* ==================== PAGE 1 ==================== */}
      <div className="a4-page font-inter shadow-2xl relative text-[12px] leading-relaxed">
        
        {/* Top Horizontal Styling Bar */}
        <div className="absolute top-0 left-0 right-0 h-[8px] bg-indigo-600 z-30" />

        {/* Left Sidebar (Deep Slate background) */}
        <div className="w-[32%] bg-[#0f172a] text-slate-100 flex flex-col h-full shrink-0 pt-[8px]">
          
          {/* Chevron Cropped Profile Photo */}
          <div className="relative w-full h-[220px] bg-[#0f172a] overflow-hidden">
            <div className="chevron-clip w-full h-full bg-[#1e293b] relative">
              <img
                src={heroImg}
                alt={profileData.fullName}
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    const fallback = document.createElement('div');
                    fallback.className = 'w-full h-full flex items-center justify-center bg-slate-800 text-white text-5xl font-extrabold font-outfit';
                    fallback.innerText = 'K';
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
          </div>

          {/* Left Column Content padding */}
          <div className="p-6 flex flex-col gap-6 flex-1 overflow-hidden">
            
            {/* Education Section */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold tracking-widest uppercase font-outfit text-indigo-400 border-b border-slate-800 pb-1 flex items-center gap-1.5">
                <GraduationCap size={16} />
                Education
              </h3>
              
              <div className="space-y-4">
                {profileData.education.map((edu, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="block text-[10px] font-mono text-indigo-300">{edu.year}</span>
                    <h4 className="font-bold text-white text-[11px] leading-snug">{edu.degree}</h4>
                    <p className="text-[10px] text-slate-400 leading-snug italic">{edu.institution}</p>
                    <p className="text-[10px] text-indigo-300 font-mono leading-none mt-0.5">Score: {edu.score}</p>
                    <p className="text-[10px] text-slate-400 mt-1 leading-snug">
                      <em>Relevant Modules:</em>
                      <span className="block text-[9.5px] leading-normal font-normal text-slate-400 font-mono mt-0.5">
                        {edu.coursework.join(", ")}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Section */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold tracking-widest uppercase font-outfit text-indigo-400 border-b border-slate-800 pb-1">
                Languages
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {profileData.languages.map((lang, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <span className="block text-xs font-bold text-white leading-tight">{lang.name}</span>
                    <span className="block text-[9px] text-slate-400 font-mono">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests Section */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold tracking-widest uppercase font-outfit text-indigo-400 border-b border-slate-800 pb-1 flex items-center gap-1.5">
                <Heart size={14} />
                Interests
              </h3>
              <div className="space-y-2">
                {profileData.interests.slice(0, 3).map((interest, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <h4 className="text-xs font-bold text-white leading-tight">{interest.name}</h4>
                    <p className="text-[10px] text-slate-400 leading-snug line-clamp-2">{interest.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Simple branding tag */}
          <div className="p-4 border-t border-slate-800 text-center">
            <span className="text-[9px] font-mono text-slate-600 uppercase tracking-widest">Page 1 of 2</span>
          </div>

        </div>

        {/* Right Main Content (White background) */}
        <div className="w-[68%] bg-white p-8 md:p-10 flex flex-col justify-between h-full pt-[40px]">
          <div className="space-y-5">
            
            {/* Header info */}
            <div className="border-b border-slate-100 pb-5">
              <h1 className="text-4xl font-extrabold font-outfit tracking-tight text-indigo-600 mb-1">
                {profileData.fullName}
              </h1>
              <h2 className="text-xs font-bold font-outfit text-slate-800 tracking-widest uppercase mb-4">
                {profileData.title}
              </h2>
              
              {/* Contact Grid with indigo icons */}
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-600">
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-indigo-600 shrink-0" />
                  <span className="font-mono">{profileData.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-indigo-600 shrink-0" />
                  <span>{profileData.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-indigo-600 shrink-0" />
                  <span className="font-mono">{profileData.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <LinkedinIcon size={14} className="text-indigo-600 shrink-0" />
                  <span className="font-mono">{profileData.socials.linkedin.replace("https://", "")}</span>
                </div>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="space-y-1.5">
              <h3 className="text-sm font-bold tracking-widest uppercase font-outfit text-indigo-600">
                Profile
              </h3>
              <p className="text-slate-600 text-[11.5px] leading-relaxed text-justify">
                {profileData.about.summary}
              </p>
            </div>

            {/* Core Competencies */}
            <div className="space-y-2">
              <h3 className="text-sm font-bold tracking-widest uppercase font-outfit text-indigo-600">
                Key Expertise
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {profileData.about.strengths.map((str, idx) => (
                  <span key={idx} className="text-[9.5px] font-semibold text-slate-700 bg-slate-100 border border-slate-200/50 px-2.5 py-0.5 rounded-md">
                    {str}
                  </span>
                ))}
              </div>
            </div>

            {/* Professional Experience Part 1 */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold tracking-widest uppercase font-outfit text-indigo-600 flex items-center gap-1.5">
                <Briefcase size={15} />
                Professional Experience
              </h3>

              <div className="space-y-4">
                {profileData.experience.slice(0, 2).map((exp, idx) => (
                  <div key={idx} className="grid grid-cols-12 gap-4">
                    {/* Left Timeline */}
                    <div className="col-span-3 text-indigo-600 font-mono text-[9.5px] font-bold space-y-0.5">
                      <span className="block">{exp.duration}</span>
                      <span className="block text-slate-500 text-[8.5px] uppercase tracking-wider">{exp.location}</span>
                    </div>
                    {/* Right Content */}
                    <div className="col-span-9 space-y-1">
                      <h4 className="font-bold text-slate-900 text-xs">
                        {exp.role} <span className="text-slate-500 font-normal">| {exp.company}</span>
                      </h4>
                      <p className="text-[10px] text-slate-500 leading-normal mb-1">{exp.description}</p>
                      
                      {/* Flex rows to make bullet points indigo */}
                      <div className="space-y-1">
                        {exp.responsibilities.slice(0, 2).map((resp, rIdx) => (
                          <div key={rIdx} className="flex gap-2 items-start text-slate-600 text-[10.5px] leading-snug">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-[5px] shrink-0" />
                            <span>{resp}</span>
                          </div>
                        ))}
                        {exp.achievements.slice(0, 1).map((ach, aIdx) => (
                          <div key={aIdx} className="flex gap-2 items-start text-slate-900 font-semibold text-[10.5px] leading-snug">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-[5px] shrink-0" />
                            <span>Accomplishment: {ach}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="text-right text-[9px] font-mono text-slate-400">
            Document generated at {new Date().toLocaleDateString()}
          </div>
        </div>

      </div>

      {/* ==================== PAGE 2 ==================== */}
      <div className="a4-page font-inter shadow-2xl relative text-[12px] leading-relaxed">
        
        {/* Top Horizontal Styling Bar */}
        <div className="absolute top-0 left-0 right-0 h-[8px] bg-indigo-600 z-30" />

        {/* Left Sidebar (Deep Slate background) */}
        <div className="w-[32%] bg-[#0f172a] text-slate-100 flex flex-col h-full shrink-0 pt-[8px]">
          
          <div className="p-6 flex flex-col gap-6 flex-1 overflow-hidden">
            
            {/* Technical Skills (Grouped) */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold tracking-widest uppercase font-outfit text-indigo-400 border-b border-slate-800 pb-1 flex items-center gap-1.5">
                <CheckSquare size={15} />
                Technical Skills
              </h3>
              
              <div className="space-y-3">
                {Object.entries(skillsByCategory).map(([cat, skills]) => (
                  <div key={cat} className="space-y-0.5">
                    <h4 className="text-[9.5px] font-mono tracking-wider text-indigo-300 font-bold uppercase">{cat}</h4>
                    <p className="text-xs text-white leading-normal font-semibold">{skills.join(", ")}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold tracking-widest uppercase font-outfit text-indigo-400 border-b border-slate-800 pb-1 flex items-center gap-1.5">
                <Award size={15} />
                Certifications
              </h3>
              
              <div className="space-y-3">
                {profileData.certifications.map((cert, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <h4 className="text-xs font-bold text-white leading-snug">{cert.name}</h4>
                    <p className="text-[10px] text-slate-400 leading-snug">{cert.issuer} ({cert.date})</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Simple branding tag */}
          <div className="p-4 border-t border-slate-800 text-center">
            <span className="text-[9px] font-mono text-slate-600 uppercase tracking-widest">Page 2 of 2</span>
          </div>

        </div>

        {/* Right Main Content (White background) */}
        <div className="w-[68%] bg-white p-8 md:p-10 flex flex-col justify-between h-full pt-[40px]">
          <div className="space-y-5">
            
            {/* Professional Experience Part 2 */}
            <div className="space-y-3">
              <div className="space-y-4">
                {profileData.experience.slice(2).map((exp, idx) => (
                  <div key={idx} className="grid grid-cols-12 gap-4">
                    {/* Left Timeline */}
                    <div className="col-span-3 text-indigo-600 font-mono text-[9.5px] font-bold space-y-0.5">
                      <span className="block">{exp.duration}</span>
                      <span className="block text-slate-500 text-[8.5px] uppercase tracking-wider">{exp.location}</span>
                    </div>
                    {/* Right Content */}
                    <div className="col-span-9 space-y-1">
                      <h4 className="font-bold text-slate-900 text-xs">
                        {exp.role} <span className="text-slate-500 font-normal">| {exp.company}</span>
                      </h4>
                      <p className="text-[10px] text-slate-500 leading-normal mb-1">{exp.description}</p>
                      
                      {/* Flex rows for bullet points */}
                      <div className="space-y-1">
                        {exp.responsibilities.slice(0, 2).map((resp, rIdx) => (
                          <div key={rIdx} className="flex gap-2 items-start text-slate-600 text-[10.5px] leading-snug">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-[5px] shrink-0" />
                            <span>{resp}</span>
                          </div>
                        ))}
                        {exp.achievements.slice(0, 1).map((ach, aIdx) => (
                          <div key={aIdx} className="flex gap-2 items-start text-slate-900 font-semibold text-[10.5px] leading-snug">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-[5px] shrink-0" />
                            <span>Accomplishment: {ach}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Projects */}
            <div className="space-y-2">
              <h3 className="text-sm font-bold tracking-widest uppercase font-outfit text-indigo-600 flex items-center gap-1.5">
                <BookOpen size={15} />
                Featured Projects
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {profileData.projects.map((proj, idx) => (
                  <div key={idx} className="border border-slate-100 p-3 rounded-xl bg-slate-50/50 space-y-1.5 flex flex-col justify-between">
                    <div className="space-y-1">
                      <h4 className="font-bold text-slate-900 text-xs">{proj.title}</h4>
                      <p className="text-[9.5px] text-slate-500 leading-relaxed line-clamp-3">{proj.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {proj.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="text-[7.5px] font-mono text-slate-600 bg-white border border-slate-200 px-1 py-0.2 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Achievements */}
            <div className="space-y-2.5">
              <h3 className="text-sm font-bold tracking-widest uppercase font-outfit text-indigo-600 flex items-center gap-1.5">
                <Award size={15} />
                Key Achievements
              </h3>

              <div className="space-y-2.5">
                {profileData.achievements.map((ach, idx) => (
                  <div key={idx} className="flex gap-2.5 items-start">
                    <div className="text-[9.5px] font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded shrink-0">
                      {ach.stat ? ach.stat.value : "Award"}
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="font-bold text-slate-900 text-xs">{ach.title}</h4>
                      <p className="text-[9.5px] text-slate-500 leading-snug">{ach.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="flex justify-between items-center text-[9px] font-mono text-slate-400">
            <span>Portfolio: {profileData.socials.portfolio.replace("https://", "")}</span>
            <span>Github: {profileData.socials.github.replace("https://", "")}</span>
          </div>
        </div>

      </div>

    </div>
  );
};

export default App;
