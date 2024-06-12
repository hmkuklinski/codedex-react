import React from "react";

export default function Notification(props) {
  let classString = "";

  //this is in JS, so when accessing props isRead, does not require {}
  if (props.isRead == false) {
    classString = "not-read";
  }
  
  {/* this is JSX --> requires curly braces for variables*/}
  return <div className={classString}>{props.message}</div>;
}
