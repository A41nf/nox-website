"use client";

import { motion, type Variants, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";

type AnimationPreset = "fadeIn" | "slideUp" | "slideInLeft" | "slideInRight";

type AnimatedSectionProps = {
  children: React.ReactNode;
  id?: string;
  preset?: AnimationPreset;
  delay?: number;
  once?: boolean;
  className?: string;
};

const variantsMap: Record<AnimationPreset, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -28 },
    visible: { opacity: 1, x: 0 },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 28 },
    visible: { opacity: 1, x: 0 },
  },
};

export default function AnimatedSection({
  children,
  className,
  preset = "slideUp",
  delay = 0,
  once = true,
  id,
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <section id={id} className={className}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      ref={sectionRef}
      id={id}
      className={className}
      variants={variantsMap[preset]}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
    >
      {children}
    </motion.section>
  );
}
