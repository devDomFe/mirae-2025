import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";

export default function Message({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="text-center w-[80%] flex flex-col gap-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeIn" }}
      >
        <TypeAnimation
          sequence={["Lorem, ipsum.", 800]}
          wrapper="span"
          cursor={false}
          speed={50}
          className="text-5xl font-semibold"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeIn", delay: 1 }}
      >
        <TypeAnimation
          sequence={[
            "Lorem ipsum dolor sit amet consectetur  adipisicing elit Cupiditate quaerat debitis consequatur in sapiente dignissimos dicta repudiandae nesciunt commodi ipsam nisi optio minima iusto voluptatem earum corporis",
            1000,
            () => onComplete(),
          ]}
          wrapper="span"
          cursor={false}
          speed={50}
          className="text-xl"
        />
      </motion.div>
    </div>
  );
}
