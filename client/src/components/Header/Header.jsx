import React from "react";
import "./Header.css"
import Nav from "./Nav/Nav";

const Header = () => {
  return <div className="header">
    <img src="./logo-huerto.png" className="logo-img"></img>
    <Nav />
  </div>;
};

export default Header;
