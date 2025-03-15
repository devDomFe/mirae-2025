import SakuraFall from "./components/SakuraFall";
import StartButton from "./components/StartButton";
import useSound from "use-sound";
import { useState, useEffect } from "react";
import Message from "./components/Message";
import FlipCardLayout from "./components/FlipCardLayout";

import springSnow from "../public/SprintSnow.mp3";

function App() {
  const [playSound] = useSound(springSnow, { volume: 0.015, loop: true });
  const [clicked, setClicked] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    if (clicked) {
      const delay = setTimeout(() => {
        setShowContent(true);
      }, 2000);

      return () => clearTimeout(delay);
    }
  }, [clicked]);

  return (
    <div className=" relative pt-[40vh] flex flex-col items-center">
      {showCards && <SakuraFall />}

      <StartButton
        onClick={() => {
          setClicked(true);
          playSound();
        }}
      />

      <div className="flex flex-col items-center gap-20 w-1/2 z-10">
        {showContent && (
          <>
            <Message onComplete={() => setShowCards(true)} />
            {showCards && <FlipCardLayout />}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
