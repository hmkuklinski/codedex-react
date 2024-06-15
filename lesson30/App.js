import { React, useState, createContext } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import Home from "./Home";
import "./styles.css";

// Create a ThemeContext --> need export statement to use in other codes!
// useContext --> manage and share state across components! 
//to useContext, need to createContext(), then define context data and provide context
export const ThemeContext = createContext();

export default function App() {
  // theme state:
  const [theme, setTheme] = useState("barbie");

  // Toggle theme function
  function toggleTheme() {
    setTheme(function(prevTheme) {
      return prevTheme === "barbie" ? "oppenheimer" : "barbie";
    });
  }

  return (
    // Provide theme and toggleTheme to child components --> ThemeSwitcher and Home
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeSwitcher />
      <Home />
    </ThemeContext.Provider>
  );
}