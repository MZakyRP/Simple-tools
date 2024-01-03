import { useEffect } from "react";
import useInput from "../hooks/useInput";

function Border2Sides({ isHorizontal = false }) {
  const [top, setTop] = useInput(0);
  const [bottom, setBottom] = useInput(0);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--border-radius", `${top}px ${isHorizontal ? bottom : top}px ${bottom}px ${isHorizontal ? top : bottom}px`
    );
  }, [top, bottom]);

  return (
    <>
      <div>
        <div className="border-input">
          <h2>{top} px</h2>
          <input type="range" min={0} max={100} value={top} onChange={setTop} />
        </div>
      </div>
      <div>
        <div className="border-input">
          <h2>{bottom} px</h2>
          <input type="range" min={0} max={100} value={bottom} onChange={setBottom} />
        </div>
      </div>
    </>
  );
}

export default Border2Sides;