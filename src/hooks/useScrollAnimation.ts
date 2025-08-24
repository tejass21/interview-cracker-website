import { useInView } from "framer-motion";
import { useRef } from "react";

export const useScrollAnimation = (threshold: number = 0.1) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold, once: true });
  
  return { ref, isInView };
};
