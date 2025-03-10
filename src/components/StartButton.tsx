import { AwesomeButtonProgress } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface StartButtonProps {
  onClick: () => void;
}

export default function StartButton({ onClick }: StartButtonProps) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence initial={false}>
      {isVisible ? (
        <motion.div
          className="inline-block"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          key="box"
        >
          <AwesomeButtonProgress
            type="primary"
            onPress={async (_, next) => {
              onClick();
              next();
              setTimeout(() => {
                setIsVisible(false);
              }, 1000);
            }}
          >
            Click me!
          </AwesomeButtonProgress>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
