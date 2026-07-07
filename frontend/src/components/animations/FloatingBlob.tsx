"use client";

import { motion } from "framer-motion";

interface FloatingBlobProps {
  className?: string;
}

export default function FloatingBlob({
  className,
}: FloatingBlobProps) {
  return (
    <motion.div
      className={className}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -30, 20, 0],
        scale: [1, 1.08, 0.95, 1],
      }}
      transition={{
        duration: 14,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}