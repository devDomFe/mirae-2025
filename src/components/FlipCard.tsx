import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { messages } from "../constants/messages";

export default function FlipCard({
  src,
  index,
}: {
  src: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div ref={ref} className="w-full h-96 perspective ">
      <motion.div
        className="relative w-full h-full transition-transform duration-1000 preserve-3d"
        animate={{ rotateY: isInView ? 0 : 180 }}
        initial={{ rotateY: 180 }}
      >
        {/* Front side (visible after flip) */}
        <div className="absolute w-full h-full backface-hidden text-center  gap-2 flex flex-col items-center">
          <img
            src={src}
            alt={`Sky ${index}`}
            className="object-cover w-full h-full rounded-lg"
          />
          <p className="font-playpen text-center w-[90%] text-sm">
            {messages[index]}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
