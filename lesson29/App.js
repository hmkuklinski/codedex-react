import React, {useState, useEffect} from "react";
import "./styles.css";

export default function App() {
  // Add your state variables here 💖
  const [toggle,setToggle]= useState(false);

  useEffect(function() {
    //set interval --> if toggle, generate random color and change every second
    const intervalId = setInterval(function() {
      if (toggle) {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
      }
    }, 1000); 

    //cleanup function --> resets IntervalId
    return function() {
      clearInterval(intervalId);
    };
  }, [toggle]);

  const handleToggle = function () {
    setToggle(function (prevToggle) {
      return !prevToggle;
    });
  };

  return (
    <div id="toggle">
      <button onClick={handleToggle}>
        {toggle ? "Stop" : "Start"} Color Changing
      </button>
    </div>
  );
}
