import Snowfall from "react-snowfall";
import { useState, useEffect } from "react";

import sakura1 from "../../public/sakura1.png";
import sakura2 from "../../public/sakura2.png";
import sakura3 from "../../public/sakura3.png";

export default function SakuraFall() {
  const [sakuraImages, setSakuraImages] = useState<CanvasImageSource[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      const images = [sakura1, sakura2, sakura3].map((src) => {
        const img = new Image();
        img.src = src;
        return img;
      });

      setSakuraImages(images);
    };

    loadImages();
  }, []);

  return (
    <Snowfall
      snowflakeCount={60}
      images={sakuraImages}
      radius={[10, 20]}
      wind={[-0.5, 0.5]}
    />
  );
}
