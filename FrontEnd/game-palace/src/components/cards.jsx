import React, { useState } from "react";
import ReadCard from './cardsRead.jsx';
import './css/tienda.css';
import { Link } from "react-router-dom";

export default function Cards() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <main>
      <div className="main-container">
        <div className="navGames">
          <div className="search-container">
            <i className="fas fa-search"></i>
            <input
              type="search"
              placeholder="Buscar en la tienda"
              id="Buscador"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="addNewGame">
            <Link to ="/agregar">
                <button className="addButton">Agregar +</button>
            </Link>
          </div>
        </div>
        <ReadCard searchQuery={searchQuery} />
      </div>
    </main>
  );
}
