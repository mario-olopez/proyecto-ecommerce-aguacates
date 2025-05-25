import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css"

const Nav = () => {

  const [isOpen, setOpen] = useState(false)

  return (
    <nav className="nav-bar">
      <div className="hamburger" onClick={() => setOpen(!isOpen)}>
        <img src="/menu-hamburcate.png" alt="Menú hamburcate" className="menu-hamburcate"/>
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li onClick={() => setOpen(false)}><Link to="/">Inicio</Link></li>
        <li onClick={() => setOpen(false)}><Link to="/nuevopedido">Realizar pedido</Link></li>
        <li onClick={() => setOpen(false)}><Link to="/huertolopez">Sobre Huerto López</Link></li>
      </ul>
    </nav>
  )
};

export default Nav;
