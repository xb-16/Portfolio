import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export function Cube() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "0px 0px -100px 0px" });
  const [isHovered, setIsHovered] = useState(false);

  // Base translation distance (closed)
  const baseZ = 50;
  // Open distance on hover
  const openZ = 80;

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-32 w-32 perspective-midrange" ref={ref}>
        <motion.div
          className="absolute inset-0"
          animate={
            isInView
              ? { rotateX: 360, rotateY: 360 }
              : { rotateX: 0, rotateY: 0 }
          }
          transition={
            isInView
              ? { duration: 20, repeat: Infinity, ease: "linear" }
              : { duration: 0.5, ease: "easeOut" }
          }
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[var(--lagoon)]/60 to-[var(--lagoon-deep)]/60 opacity-80 blur-sm"
            style={{ transform: `translateZ(${baseZ}px)` }}
            animate={{ transform: `translateZ(${isHovered ? openZ : baseZ}px)` }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
          <motion.div
            className="absolute inset-0 border border-[var(--lagoon)]/30 bg-[var(--lagoon)]/10 backdrop-blur-sm"
            style={{ transform: `translateZ(${baseZ}px)` }}
            animate={{ transform: `translateZ(${isHovered ? openZ : baseZ}px)` }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
          {/* Back */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[var(--palm)]/60 to-[var(--lagoon)]/60 opacity-80 blur-sm"
            style={{ transform: `rotateY(180deg) translateZ(${baseZ}px)` }}
            animate={{ transform: `rotateY(180deg) translateZ(${isHovered ? openZ : baseZ}px)` }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
          <motion.div
            className="absolute inset-0 border border-[var(--palm)]/30 bg-[var(--palm)]/10 backdrop-blur-sm"
            style={{ transform: `rotateY(180deg) translateZ(${baseZ}px)` }}
            animate={{ transform: `rotateY(180deg) translateZ(${isHovered ? openZ : baseZ}px)` }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
          {/* Left */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[var(--sea-ink)]/60 to-[var(--lagoon)]/60 opacity-80 blur-sm"
            style={{ transform: `rotateY(-90deg) translateZ(${baseZ}px)` }}
            animate={{ transform: `rotateY(-90deg) translateZ(${isHovered ? openZ : baseZ}px)` }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
          <motion.div
            className="absolute inset-0 border border-[var(--sea-ink)]/30 bg-[var(--sea-ink)]/10 backdrop-blur-sm"
            style={{ transform: `rotateY(-90deg) translateZ(${baseZ}px)` }}
            animate={{ transform: `rotateY(-90deg) translateZ(${isHovered ? openZ : baseZ}px)` }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
          {/* Right */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[var(--lagoon)]/60 to-[var(--sea-ink)]/60 opacity-80 blur-sm"
            style={{ transform: `rotateY(90deg) translateZ(${baseZ}px)` }}
            animate={{ transform: `rotateY(90deg) translateZ(${isHovered ? openZ : baseZ}px)` }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
          <motion.div
            className="absolute inset-0 border border-[var(--lagoon)]/30 bg-[var(--lagoon)]/10 backdrop-blur-sm"
            style={{ transform: `rotateY(90deg) translateZ(${baseZ}px)` }}
            animate={{ transform: `rotateY(90deg) translateZ(${isHovered ? openZ : baseZ}px)` }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
          {/* Top */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[var(--foam)]/60 to-[var(--lagoon)]/60 opacity-80 blur-sm"
            style={{ transform: `rotateX(90deg) translateZ(${baseZ}px)` }}
            animate={{ transform: `rotateX(90deg) translateZ(${isHovered ? openZ : baseZ}px)` }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
          <motion.div
            className="absolute inset-0 border border-[var(--foam)]/30 bg-[var(--foam)]/10 backdrop-blur-sm"
            style={{ transform: `rotateX(90deg) translateZ(${baseZ}px)` }}
            animate={{ transform: `rotateX(90deg) translateZ(${isHovered ? openZ : baseZ}px)` }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
          {/* Bottom */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[var(--sea-ink)]/60 to-[var(--palm)]/60 opacity-80 blur-sm"
            style={{ transform: `rotateX(-90deg) translateZ(${baseZ}px)` }}
            animate={{ transform: `rotateX(-90deg) translateZ(${isHovered ? openZ : baseZ}px)` }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
          <motion.div
            className="absolute inset-0 border border-[var(--sea-ink)]/30 bg-[var(--sea-ink)]/10 backdrop-blur-sm"
            style={{ transform: `rotateX(-90deg) translateZ(${baseZ}px)` }}
            animate={{ transform: `rotateX(-90deg) translateZ(${isHovered ? openZ : baseZ}px)` }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </motion.div>
      </div>
      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10 rounded-full bg-[var(--lagoon)]/20 blur-3xl" />
    </div>
  );
}