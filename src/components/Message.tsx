import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";
import ScrollIndicator from "./ScrollIndicator";

export default function Message({
  onComplete,
  showCards,
}: {
  onComplete: () => void;
  showCards: boolean;
}) {
  return (
    <div className="text-center w-[80%] flex flex-col gap-4 h-[60vh] relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeIn" }}
      >
        <TypeAnimation
          sequence={["Happy Birthday, love.", 800]}
          wrapper="span"
          cursor={false}
          speed={50}
          className="text-3xl font-playpen"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeIn", delay: 1 }}
      >
        <TypeAnimation
          sequence={[
            "May you enjoy the rest of your day mahal and always be filled with happiness. Know that no matter what, you’ll always have me by your side. You are a gift in my life sobra, and I truly appreciate your presence. May the Lord continue to guide and bless you always. I love you bebe!",
            1000,
            () => onComplete(),
          ]}
          wrapper="span"
          cursor={false}
          speed={50}
          className="text-sm font-playpen"
        />
      </motion.div>

      {showCards && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <ScrollIndicator />
        </div>
      )}
    </div>
  );
}
