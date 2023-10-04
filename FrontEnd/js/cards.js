import { getAllGames } from "./apiGames.js";

document.addEventListener('DOMContentLoaded', ()=>{
    llenarCards();
})


async function llenarCards(){
    const datos = await getAllGames();
    console.log(datos);
    const cards = document.querySelector('.container-cards');
    datos.forEach(dato=>{
        const { Nombre, Imagen, Precio} = dato;
        cards.innerHTML+=`
            <div class="card">
                <img src="./images/${Imagen}" alt="Imagen de la tarjeta">
                <h2>${Nombre}</h2>
                <p>${Precio}</p>
            </div>
        `
    })
}