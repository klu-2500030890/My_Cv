import React from "react";
import { profileData } from "../data/profile";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-white/5 bg-[#050816] z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Copyright */}
        <p className="text-xs font-mono text-gray-500 text-center md:text-left">
          &copy; {currentYear} {profileData.fullName}. All rights reserved.
        </p>

        {/* Right Side: Credit Signature */}
        <p className="text-xs font-mono text-gray-500 text-center md:text-right">
          Designed &amp; Engineered by{" "}
          <span className="text-gradient-cyan-blue font-semibold">
            {profileData.fullName}
          </span>
        </p>

      </div>
    </footer>
  );
};
export default Footer;
