import './css/tienda.css'
import React from "react";
import ReadCard from './cardsRead.jsx';

export default function Cards(){
    return(
        <main>
            <div className="main-container">
                <div className="navGames">
                    <div className="search-container">
                        <i className="fas fa-search"></i>
                        <input type="search" placeholder="Buscar en la tienda" id="Buscador" />
                    </div>
                    <div className="addNewGame">
                        <button className="addButton">Agregar +</button>
                    </div>
                </div>
                <ReadCard />
            </div>
        </main>
    )
}