import { Variants } from "framer-motion";

// Fade in animations
export const fadeIn = (direction: "up" | "down" | "left" | "right" = "up", delay: number = 0): Variants => {
  const directions = {
    up: { y: 40, opacity: 0 },
    down: { y: -40, opacity: 0 },
    left: { x: 40, opacity: 0 },
    right: { x: -40, opacity: 0 },
  };

  return {
    hidden: directions[direction],
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };
};

// Scale animations
export const scaleIn = (delay: number = 0): Variants => ({
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
});

// Slide animations
export const slideIn = (direction: "up" | "down" | "left" | "right" = "up", delay: number = 0): Variants => {
  const directions = {
    up: { y: 100, opacity: 0 },
    down: { y: -100, opacity: 0 },
    left: { x: 100, opacity: 0 },
    right: { x: -100, opacity: 0 },
  };

  return {
    hidden: directions[direction],
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };
};

// Stagger animations for lists
export const staggerContainer = (staggerChildren: number = 0.1, delayChildren: number = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// Bounce animations
export const bounceIn = (delay: number = 0): Variants => ({
  hidden: { scale: 0.3, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.68, -0.55, 0.265, 1.55],
    },
  },
});

// Rotate animations
export const rotateIn = (delay: number = 0): Variants => ({
  hidden: { rotate: -180, opacity: 0, scale: 0.8 },
  visible: {
    rotate: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
});

// Hover animations
export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.2, ease: "easeInOut" },
};

export const hoverLift = {
  y: -5,
  transition: { duration: 0.2, ease: "easeInOut" },
};

// Page transitions
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3, ease: "easeInOut" },
};

// Text reveal animations
export const textReveal = (delay: number = 0): Variants => ({
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
});

// Card hover animations
export const cardHover = {
  y: -8,
  transition: { duration: 0.3, ease: "easeInOut" },
};

// Floating animation
export const floating = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// Pulse animation
export const pulse = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// Wave animation
export const wave = {
  rotate: [0, 10, -10, 0],
  transition: {
    duration: 1.5,
    repeat: Infinity,
    ease: "easeInOut",
  },
};
