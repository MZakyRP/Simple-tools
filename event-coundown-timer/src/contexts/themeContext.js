import { createContext, useState, useMemo, useEffect } from "react";

const themeContext = createContext("light");

function getThemeValue() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    if (localStorage) {
      localStorage.setItem("theme", theme);
    } else {
      alert("Your browser does not support Local Storage, changes would not be kept");
    }
  }, [theme]);

  const themeValue = useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme, toggleTheme]);

  return themeValue;
}

export { themeContext, getThemeValue };
export default themeContext.Provider;
