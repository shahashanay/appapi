import React, { useState,useContext }  from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { themeContext } from "../../Context";
const Navbar = () => {
  const theme = useContext(themeContext);
  const language= theme.state.language;
  const Titlelanguage = language ? "Stock Exchange" : "ตลาดหลักทรัพย์" ;
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">{Titlelanguage}</div>
        <Toggle />
      </div>
      {/* right */}
    </div>
  );
};

export default Navbar;
