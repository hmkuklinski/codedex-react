import { React, useContext } from "react";
//want to import the ThemeContext defined in App.js
import { ThemeContext } from "./App.js";

export default function ThemeSwitcher() {
  //consume the theme and toggleTheme from the ThemeContext
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-switcher">
      <button onClick={toggleTheme}>
        Switch to {theme === "barbie" ? "Oppenheimer" : "Barbie"} Theme
      </button>
    </div>
  );
}