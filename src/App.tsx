import SakuraFall from "./components/SakuraFall";
import StartButton from "./components/StartButton";
import useSound from "use-sound";
import { useState } from "react";

import springSnow from "../public/SprintSnow.mp3";

function App() {
  const [playSound] = useSound(springSnow, { volume: 0.015, loop: true });
  const [clicked, setClicked] = useState(false);

  return (
    <div className="bg-[#f7e5e3] min-h-screen w-full">
      <div className="h-[2000px] relative">
        {clicked ? <SakuraFall /> : null}

        <div className="h-screen relative">
          <StartButton
            onClick={() => {
              setClicked(true);
              playSound();
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
