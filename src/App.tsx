import SakuraFall from "./components/SakuraFall";
import StartButton from "./components/StartButton";
import useSound from "use-sound";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";

import springSnow from "../public/SprintSnow.mp3";

function App() {
  const [playSound] = useSound(springSnow, { volume: 0.015, loop: true });
  const [clicked, setClicked] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (clicked) {
      const delay = setTimeout(() => {
        setShowContent(true);
      }, 2000); // 2-second delay

      return () => clearTimeout(delay); // Cleanup timeout
    }
  }, [clicked]);

  return (
    <div className="bg-[#f7e5e3] min-h-screen w-full border-2 border-red-600">
      <div className="relative flex justify-center pt-[50vh] border-2 border-green-600">
        {clicked ? <SakuraFall /> : null}

        <StartButton
          onClick={() => {
            setClicked(true);
            playSound();
          }}
        />

        {showContent && (
          <div className="text-center w-1/3 flex flex-col gap-4 transform translate-y-[-50%]">
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
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit Cupiditate quaerat debitis consequatur in sapiente dignissimos dicta repudiandae nesciunt commodi ipsam nisi optio minima iusto voluptatem earum corporis",
                ]}
                wrapper="span"
                cursor={false}
                speed={50}
                className="text-xl"
              />
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
