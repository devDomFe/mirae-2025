import FlipCard from "./FlipCard";
import { motion } from "motion/react";

export default function FlipCardLayout() {
  return (
    <motion.div
      className="w-[70%] flex flex-col items-center gap-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeIn", delay: 1 }}
    >
      {Array.from({ length: 10 }, (_, i) => (
        <FlipCard key={i} />
      ))}
    </motion.div>
  );
}
