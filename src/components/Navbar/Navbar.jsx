import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      {/* 1. Logotipo de la Suite */}
      <div className="navbar-logo">
         MORA <span className="logo-accent">| TECH SUITE</span>
      </div>

      {/* 2. Enlaces de Navegación de la Landing */}
      <ul className="navbar-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#analytics">Analytics</a></li>
        <li><a href="#infrastructure">Infrastructure</a></li>
      </ul>

      {/* 3. Botón de Llamado a la Acción (CTA) */}
      <div className="navbar-cta">
        <a href="https://wa.me" target="_blank" rel="noreferrer" className="cta-button">
          Launch Console
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
