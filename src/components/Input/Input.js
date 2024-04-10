import React from "react";
import "./Input.css";

function Input({ type = "text", size, ...rest }) {
  return <input type={type} className={`input ${size}`} {...rest} />;
}

export default Input;
