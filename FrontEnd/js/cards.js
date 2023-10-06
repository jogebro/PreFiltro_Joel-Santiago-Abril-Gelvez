import { getAllGames, deleteGame } from "./apiGames.js";

document.addEventListener('DOMContentLoaded', ()=>{
    borrarLocal();
    llenarCards();
});

function borrarLocal(){
    localStorage.clear();
}

async function llenarCards() {
    const cards = document.querySelector('.container-cards');
    const datos = await getAllGames();
    
    datos.forEach(dato => {
        const { Nombre, Imagen, Precio, _id } = dato;
        const precioFormateado = Precio.toLocaleString();
        cards.innerHTML += `
        <a href="../gameInfo/gameInfo.html">
            <div class="card">
                <div class="image-container">
                    <img src="../images/${Imagen}" alt="Imagen de la tarjeta">
                    <div class="edit-icon">
                        <i class="fa-solid fa-trash delete" id="${_id}" style="margin-right: 15px"></i>
                        <i class="fas fa-pencil-alt" data-href="../editPage/editPage.html"></i>
                    </div>
                </div>
                <div class="card-detalles">
                    <h2>${Nombre}</h2>
                    <p>$${precioFormateado} COP</p>
                </div>
                <button class="buyButton">Comprar</button>
            </div>
        </a>
        `;
    });
}

document.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('buyButton')) {
        e.preventDefault();
        alert('Esta función no está implementada');
    }
    if (e.target && e.target.classList.contains('delete')) {
        e.preventDefault();
        deleteCardId(e);
    }
    if (e.target && e.target.closest('.edit-icon i')) {
        e.preventDefault();
        const href = e.target.getAttribute('data-href');
        if (href) {
            window.location = href;
        }
    }
});

const addButton = document.querySelector('.addButton');
addButton.addEventListener('click', ()=>{
    window.location = '../addPage/addPage.html';
});

function deleteCardId(e) {
    const id = e.target.getAttribute('id');
    const confirmar = confirm("Seguro que deseas eliminar este juego?");
    if (confirmar) {
        deleteGame(id);
    }
}
