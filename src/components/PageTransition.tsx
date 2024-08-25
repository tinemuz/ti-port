// src/components/PageTransition.tsx
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Start from bottom and invisible
      animate={{ opacity: 1, y: 1 }} // 1px to reduce jitter
      transition={{ duration: 0.5, ease: "easeInOut" }} // Adjust duration and easing
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
