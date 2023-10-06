import './css/nav.css';
import React from 'react';
import logoGAPA from './assets/imgs/GAPA-logo.png';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  return (
    <header>
      <nav>
        <div className="content-img">
          <img src={logoGAPA} alt="GAPA Logo" />
        </div>
        <div>
          <ul className="links">
            <li className={location.pathname === '/' ? 'active' : ''}>
              <Link to="/">Inicio</Link>
            </li>
            <li className={location.pathname === '/tienda' || location.pathname === '/agregar' || location.pathname === '/editPage' ? 'active' : ''}>
              <Link to="/tienda">Tienda</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
