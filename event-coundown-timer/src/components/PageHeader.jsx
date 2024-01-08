import { useContext } from "react";
import { MdModeNight, MdLightMode } from "react-icons/md";
import { themeContext } from "../contexts/themeContext";

function PageHeader() {
  const { theme, toggleTheme } = useContext(themeContext);

  return (
    <header>
      <h1>Event Countdown Timer</h1>
      <div>
        {theme === "light"
          ? <MdModeNight className="theme-toggler" onClick={toggleTheme} />
          : <MdLightMode className="theme-toggler" onClick={toggleTheme} />
        }
      </div>
    </header>
  );
}

export default PageHeader;
