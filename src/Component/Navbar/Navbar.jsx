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
        <h1 className="n-name">STOCK EXCHANGE<span className="l-name"> ตลาดหลักทรัพย์</span></h1>
        <Toggle />
      </div>
      {/* right */}
    </div>
  );
};

export default Navbar;
