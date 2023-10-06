import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './css/cards.css';

export default function ReadCard({ searchQuery }) {
  const [gamesData, setGamesData] = useState([]);
  const [images, setImages] = useState({});

  useEffect(() => {
    axios.get('http://localhost:4000/games')
      .then((res) => {
        console.log(res.data);
        setGamesData(res.data);
      });
  }, []);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const loadedImages = {};

        for (const data of gamesData) {
          const { Imagen } = data;
          const image = await import(`./assets/imgs/${Imagen}`);
          loadedImages[Imagen] = image.default;
        }

        setImages(loadedImages);
      } catch (error) {
        console.log(error);
      }
    }

    if (gamesData.length > 0) {
      loadImages();
    }
  }, [gamesData]);

  const setGameData = (data) => {
    let { _id, Nombre, Imagen, Plataforma, Genero, Clasificacion, Descripcion, Precio, Stock } = data;
    localStorage.setItem('ID', _id);
    localStorage.setItem('Nombre', Nombre);
    localStorage.setItem('Imagen', Imagen);
    localStorage.setItem('Plataforma', Plataforma);
    localStorage.setItem('Genero', Genero);
    localStorage.setItem('Clasificacion', Clasificacion);
    localStorage.setItem('Descripcion', Descripcion);
    localStorage.setItem('Precio', Precio);
    localStorage.setItem('Stock', Stock);
  }

  const getGameData = () => {
    axios.get('http://localhost:4000/games')
      .then((getGameData) => {
        setGamesData(getGameData.data);
      })
  }

  const deleteGame = async (id, e) => {
    e.stopPropagation();
    e.preventDefault();
    const confirmar = window.confirm("Estas seguro que deseas eliminar este juego?");
    if (confirmar) {
      try {
        await axios.delete(`http://localhost:4000/games/${id}`);
        getGameData();
      } catch (error) {
        console.error("Error al eliminar el juego:", error);
      }
    }
  }

  const filteredGames = gamesData.filter((data) =>
    data.Nombre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container-cards">
      {filteredGames.map((data) => {
        const { Nombre, Imagen, Precio, _id } = data;
        const precioFormateado = Precio.toLocaleString();
        const imgUrl = images[Imagen];

        return (
          <a href="/gameInfo" key={_id}>
            <div className="card">
              <div className="image-container">
                {imgUrl && <img src={imgUrl} alt=". . ." />}
                <div className="edit-icon">
                  <i
                    className="fa-solid fa-trash delete"
                    id={_id}
                    style={{ marginRight: "15px" }}
                    onClick={(e) => deleteGame(_id, e)}
                  ></i>
                  <Link to="/editPage">
                    <i className="fas fa-pencil-alt" onClick={()=>setGameData(data)}></i>
                  </Link>
                </div>
              </div>
              <div className="card-detalles">
                <h2>{Nombre}</h2>
                <p>${precioFormateado} COP</p>
              </div>
              <button className="buyButton">Comprar</button>
            </div>
          </a>
        )
      })}
    </div>
  );
}
