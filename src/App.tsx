import SakuraFall from "./components/SakuraFall";
import StartButton from "./components/StartButton";
import useSound from "use-sound";
import { useState, useEffect, useRef } from "react";
import Message from "./components/Message";
import FlipCardLayout from "./layouts/FlipCardLayout";
import Cake from "./components/Cake";
import "./App.css";

import springSnow from "../public/SprintSnow.mp3";

function App() {
  const [playSound] = useSound(springSnow, { volume: 0.015, loop: true });
  const [clicked, setClicked] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showCards, setShowCards] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (clicked) {
      const delay = setTimeout(() => {
        setShowContent(true);
      }, 2000);

      return () => clearTimeout(delay);
    }
  }, [clicked]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const updateMask = () => {
      if (el.scrollTop > 0) {
        el.classList.add("is-top-overflowing");
      } else {
        el.classList.remove("is-top-overflowing");
      }

      if (el.scrollTop + el.clientHeight < el.scrollHeight - 1) {
        el.classList.add("is-bottom-overflowing");
      } else {
        el.classList.remove("is-bottom-overflowing");
      }
    };

    el.addEventListener("scroll", updateMask);
    window.addEventListener("resize", updateMask);
    updateMask();

    return () => {
      el.removeEventListener("scroll", updateMask);
      window.removeEventListener("resize", updateMask);
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center h-screen">
      <img
        src="/sakura_bg2.jpg"
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        alt="Sakura Fall"
      />

      {showCards && <SakuraFall />}

      <div
        className="content flex flex-col items-center w-1/2 h-full z-10 overflow-y-auto pt-[40vh]"
        ref={scrollRef}
      >
        <StartButton
          onClick={() => {
            setClicked(true);
            playSound();
          }}
        />

        <div className="flex flex-col items-center gap-20 w-full relative">
          {showContent && (
            <>
              {showCards && <Cake />}
              <Message
                onComplete={() => setShowCards(true)}
                showCards={showCards}
              />
              {showCards && <FlipCardLayout />}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
