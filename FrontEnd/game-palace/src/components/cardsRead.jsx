import React, { useEffect, useState } from 'react';
import { getAllGames } from './apiGames.js';
import './css/cards.css'

export default function ReadCard() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetchGame() {
      const gameData = await getAllGames();
      setGames(gameData);
    }
    fetchGame();
  }, [])

  return (
    <div className="container-cards">
      {games.map((game) => {
        const { Nombre, Imagen, Precio, _id } = game;
        const precioFormateado = Precio.toLocaleString();
        console.log(Imagen);

        return (
            <a href="../gameInfo" key={_id}>
                <div className="card">
                <div className="image-container">
                    <img src='./assets/imgs/rdr2.jpg' alt=". . ." />
                        <div className="edit-icon">
                        <i className="fa-solid fa-trash delete" id={_id} style={{ marginRight: '15px' }}></i>
                        <i className="fas fa-pencil-alt" data-href="../editPage/editPage.html"></i>
                    </div>
                </div>
                <div className="card-detalles">
                    <h2>{Nombre}</h2>
                    <p>${precioFormateado} COP</p>
                </div>
                    <button className="buyButton">Comprar</button>
                </div>
            </a>
            );
        })}
    </div>
  );
}
