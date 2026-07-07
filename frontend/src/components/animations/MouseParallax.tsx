"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode } from "react";

interface MouseParallaxProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export default function MouseParallax({
  children,
  className,
  strength = 30,
}: MouseParallaxProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 120,
    damping: 20,
  });

  const springY = useSpring(y, {
    stiffness: 120,
    damping: 20,
  });

  function handleMouseMove(
    e: React.MouseEvent<HTMLDivElement>
  ) {
    const rect = e.currentTarget.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const moveX = ((mouseX / rect.width) - 0.5) * strength;
    const moveY = ((mouseY / rect.height) - 0.5) * strength;

    x.set(moveX);
    y.set(moveY);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <div
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
    >
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}