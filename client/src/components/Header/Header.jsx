import React from "react";
import "./Header.css"
import Nav from "./Nav/Nav";

const Header = () => {
  return <div className="header">
    <a href="/"><img src="./logo-huerto.png" className="logo-img" alt="logo Huerto López"></img></a>
    <Nav />
  </div>;
};

export default Header;
