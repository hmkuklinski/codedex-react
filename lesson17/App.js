import { useState } from "react";

export default function App(props) {
  // State to track tooltip visibility
  const [showTooltip, setShowTooltip] = useState(false);

  // define handleMouseEnter() here 💖
  function handleMouseEnter(){
    setShowTooltip(true);
  }

  // define handleMouseLeave() here 💖
  function handleMouseLeave(){
    setShowTooltip(false);
  }

  return (
    <div className="App">
      <div
        className="element-with-tooltip"
        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
      >
        What is a tooltip? (hover to find out)
        {showTooltip && <div className="tooltip">This is a tooltip</div>}
      </div>
    </div>
  );
}
