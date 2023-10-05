import { getAllGames } from "./apiGames.js";

document.addEventListener('DOMContentLoaded', ()=>{
    llenarCards();
})

async function llenarCards() {
    const datos = await getAllGames();
    const cards = document.querySelector('.container-cards');
    
    
    datos.forEach(dato => {
        const { Nombre, Imagen, Precio } = dato;
        const precioFormateado = Precio.toLocaleString();
        cards.innerHTML += `
        <a href="pagina_destino.html">
            <div class="card">
            <img src="../images/${Imagen}" alt="Imagen de la tarjeta">
            <div class="card-detalles">
                <h2>${Nombre}</h2>
                <p>$${precioFormateado} COP</p>
            </div>
            <button id="buyButton">Comprar</button>
            </div>
        </a>
        `
    });
}

document.addEventListener('click', function (e) {
    if (e.target && e.target.id == 'buyButton') {
        e.preventDefault();
        alertCompra();
    }
});

function alertCompra() {
    alert('Esta función no está implementada');
}