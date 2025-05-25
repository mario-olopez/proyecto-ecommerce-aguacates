import React from "react";
import { Link } from "react-router-dom"
import "./Nav.css"

const Nav = () => {
  return <nav>
    <ul className="nav-bar">
      <li><Link to="/">Inicio</Link></li>
      <li><Link to="/nuevopedido">Realizar pedido</Link></li>
      <li><Link to="/huertolopez">Sobre Huerto López</Link></li>
    </ul>
  </nav>;
};

export default Nav;
