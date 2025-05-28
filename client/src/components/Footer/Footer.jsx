import React from "react";
import "./Footer.css"

const Footer = () => {
  return <div className="footer">
    <span className="address">
      <h3>🗺️ <u>Dirección</u></h3>
      <p>Calle del Calvario, 7. Bédar, Almería</p>
    </span>
    <span className="contact">
      <h3>📲<u> Contacto</u></h3>
      <p>Antonio López Velázquez</p>
      <p>606874244</p>
      <p>antoniolvelazquez@gmail.com</p>
    </span>
    <span className="copyright">
      <h3>© <u>Derechos</u></h3>
      <p>@copyright 2025 - Todos los derechos reservados</p>
    </span>
  </div>;
};

export default Footer;
