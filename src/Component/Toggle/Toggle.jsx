import React, { useContext } from "react";
import "./Toggle.css";
import { themeContext } from "../../Context";

const Toggle = () => {
  const theme = useContext(themeContext);
  const language = theme.state.language;
  const handleClick = () => {
    // debugger
    theme.dispatch({ type: "toggle" });
  };
  return (
    <div className="toggle" onClick={handleClick}>
      TH
      EN
      <div
        className="t-button"
        style={language ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
