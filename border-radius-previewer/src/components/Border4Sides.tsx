import { useEffect } from "react";
import useInput from "../hooks/useInput";

function Border4Sides() {
  const [topLeft, setTopLeft] = useInput(0);
  const [topRight, setTopRight] = useInput(0);
  const [bottomLeft, setBottomLeft] = useInput(0);
  const [bottomRight, setBottomRight] = useInput(0);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--border-radius", `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`
    );
  }, [topLeft, topRight, bottomLeft, bottomRight]);

  return (
    <>
      <div>
        <div className="border-input">
          <h2>{topLeft} px</h2>
          <input type="range" min={0} max={100} value={topLeft} onChange={setTopLeft} />
        </div>
        <div className="border-input">
          <h2>{topRight} px</h2>
          <input type="range" min={0} max={100} value={topRight} onChange={setTopRight} />
        </div>
      </div>
      <div>
        <div className="border-input">
          <h2>{bottomLeft} px</h2>
          <input type="range" min={0} max={100} value={bottomLeft} onChange={setBottomLeft} />
        </div>
        <div className="border-input">
          <h2>{bottomRight} px</h2>
          <input type="range" min={0} max={100} value={bottomRight} onChange={setBottomRight} />
        </div>
      </div>
    </>
  );
}

export default Border4Sides;