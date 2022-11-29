import React, { useState,useContext }  from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { themeContext } from "../../Context";
import logo from '../logo.jpg';
const Navbar = () => {
  const theme = useContext(themeContext);
  const language= theme.state.language;
  const Titlelanguage = language ? "Stock Exchange" : "ตลาดหลักทรัพย์" ;
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
      <img src={logo} alt="log from sea" height="60px" width="90px"  />
        <div className="n-name">{Titlelanguage}</div>
        <Toggle />
      </div>
      {/* right */}
    </div>
  );
};

export default Navbar;
