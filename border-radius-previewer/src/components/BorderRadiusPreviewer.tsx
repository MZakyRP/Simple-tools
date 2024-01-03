import { useState } from "react";
import Border4Sides from "./Border4Sides";
import Border2Sides from "./Border2Sides";
import Border1Side from "./Border1Side";
import BorderOptions from "./BorderOptions";

function BorderRadiusPreviewer() {
  const [sides, setSides] = useState(2);
  const [isHorizontal, setIsHorizontal] = useState(false);

  return (
    <>
      <header>
        <h1>Border Radius Previewer</h1>
      </header>
      <main>
        <BorderOptions useSides={[sides, setSides]} useHorizontal={[isHorizontal, setIsHorizontal]} />
        <section>
          {sides === 4
            ? <Border4Sides />
            : sides === 2 && !isHorizontal
              ? <Border2Sides />
              : sides === 1
                ? <Border1Side />
                : null
          }
          <div>
            {sides === 2 && isHorizontal
              ? <Border2Sides isHorizontal={isHorizontal} />
              : null
            }
            <img src="/flower.jpg" alt="Flower" />
          </div>
        </section>
      </main>
    </>
  );
}

export default BorderRadiusPreviewer;