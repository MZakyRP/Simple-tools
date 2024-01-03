import { useEffect } from "react";
import useInput from "../hooks/useInput";

function Border1Side() {
  const [all, setAll] = useInput(0);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--border-radius", `${all}px`
    );
  }, [all]);

  return (
    <div>
      <div className="border-input">
        <h2>{all} px</h2>
        <input type="range" min={0} max={100} value={all} onChange={setAll} />
      </div>
    </div>
  );
}

export default Border1Side;