import { AwesomeButtonProgress } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { useState } from "react";

interface StartButtonProps {
  onClick: () => void;
}

export default function StartButton({ onClick }: StartButtonProps) {
  const [hidden, setHidden] = useState(false);

  if (hidden) return null;

  return (
    <div className="inline-block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <AwesomeButtonProgress
        type="primary"
        onPress={async (element, next) => {
          onClick();
          next();
          setTimeout(() => {
            setHidden(true);
          }, 700);
        }}
      >
        Click me!
      </AwesomeButtonProgress>
    </div>
  );
}
