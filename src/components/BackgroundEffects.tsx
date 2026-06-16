import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const BackgroundEffects: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Configure spring interpolation for smooth cursor-following movement
  const springConfig = { damping: 35, stiffness: 200, mass: 0.8 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Center the glow orb (width/height is 400px, so offset by 200px)
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-bg-deep">
      {/* Background Mesh Orbs with float transitions */}
      <div className="bg-mesh">
        <motion.div
          className="mesh-orb-1"
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -70, 40, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="mesh-orb-2"
          animate={{
            x: [0, -40, 50, 0],
            y: [0, 80, -50, 0],
            scale: [1, 0.9, 1.12, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="mesh-orb-3"
          animate={{
            x: [0, 40, -40, 0],
            y: [0, 50, 50, 0],
            scale: [1, 1.08, 0.92, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.35]" />

      {/* Radial Ambient Dark Cover */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#050816_80%)]" />

      {/* Mouse Follower Glow (enabled on medium screens and up) */}
      <motion.div
        className="hidden md:block absolute w-[400px] h-[400px] rounded-full pointer-events-none blur-[120px] opacity-[0.22] bg-[radial-gradient(circle,#8b5cf6_0%,#06b6d4_40%,#6366f1_80%,transparent_100%)]"
        style={{
          x: glowX,
          y: glowY,
        }}
      />
    </div>
  );
};
export default BackgroundEffects;
