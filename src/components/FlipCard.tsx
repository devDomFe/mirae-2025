import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function FlipCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div ref={ref} className="w-full h-96 perspective">
      <motion.div
        className="relative w-full h-full transition-transform duration-1000 preserve-3d"
        animate={{ rotateY: isInView ? 0 : 180 }}
        initial={{ rotateY: 180 }}
      >
        {/* Front side (visible after flip) */}
        <div className="absolute w-full h-full backface-hidden">
          <img
            src="https://picsum.photos/300/200"
            alt="Random"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Back side (initial) */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-blue-400" />
      </motion.div>
    </motion.div>
  );
}
