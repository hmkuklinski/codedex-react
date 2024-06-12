import React, {useState} from "react";

export default function Stopwatch() {
  const [seconds, setSeconds] = useState(0);

  //delays the calling of a function by amt specified (this function adds one to second value after a second passes)
  setTimeout(function() {
  setSeconds(seconds + 1);
  }, 1000);
  return (
    <div>
      <h2>Time Starts Now!</h2>
      {seconds} seconds
    </div>
  );
}
