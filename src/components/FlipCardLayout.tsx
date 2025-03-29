import FlipCard from "./FlipCard";
import { motion } from "motion/react";

const images = Array.from({ length: 10 }, (_, i) => `/sky/${i + 1}.jpg`);

export default function FlipCardLayout() {
  return (
    <motion.div
      className="w-[70%] flex flex-col items-center gap-40 pb-80"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeIn", delay: 1 }}
    >
      {images.map((src, index) => (
        <FlipCard key={index} src={src} index={index} />
      ))}
    </motion.div>
  );
}
