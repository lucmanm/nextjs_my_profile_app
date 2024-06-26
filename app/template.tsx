"use client";

import { motion } from "framer-motion";
import useScrollProgress from "@/hook/useScrollProgress"
interface TemplateProps {
  children: React.ReactNode;
}

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const Template: React.FC<TemplateProps> = ({ children }) => {
    const completion = useScrollProgress()
  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear", delay: 0.2, duration: 0.4 }}
        className="dark:bg-background min-h-screen"
      >
        {children}
      </motion.main>
      <motion.span
      style={{transform: `translateY(${completion - 100}%)`}}
      className="fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700 "></motion.span>
      <div className="min-h-full"></div>
    </>
  );
};

export default Template;
