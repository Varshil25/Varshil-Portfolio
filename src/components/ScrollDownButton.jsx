import { ChevronDown } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export const ScrollDownButton = () => {
  return (
    <motion.a
      href="#hero"
      className="group absolute bottom-5 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-xs sm:text-sm text-foreground/70 hover:text-primary transition-colors z-40"
      initial={{ y: 0 }}
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
    >
      <div className="p-2 border border-foreground/30 rounded-full shadow-md bg-background/80 backdrop-blur-sm group-hover:border-primary transition">
        <ChevronDown size={18} className="animate-bounce-slow" />
      </div>
      <span className="mt-1">Scroll</span>
    </motion.a>
  );
};

