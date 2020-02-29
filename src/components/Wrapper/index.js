import React from "react";
import "./style.css";
// defining wrapper component
function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;
