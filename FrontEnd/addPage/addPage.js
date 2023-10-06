import { getAllPltf, getAllGenr, getAllClsf, addNewGame } from "../js/apiGames.js";

document.addEventListener('DOMContentLoaded', async ()=>{
    await addButtonsPlt();
    await addButtonsGnr();
    addOptsClsf();
})

async function addButtonsPlt() {
    const btnsPlt = document.querySelector('.containPlt');
    const plataformas = await getAllPltf();

    plataformas.forEach(plt => {
        const { Plataforma } = plt;
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'select-button-plt';
        button.value = Plataforma;
        button.textContent = Plataforma;

        button.addEventListener('click', () => {
            handleSelection(button);
        });

        btnsPlt.appendChild(button);
    });
}

const handleSelection = (button) => {
    const valor = button.value;
    let plataformasSeleccionadas = JSON.parse(localStorage.getItem('plataformasSeleccionadas')) || [];

    if (!plataformasSeleccionadas.includes(valor)) {
        plataformasSeleccionadas.push(valor);
        button.style.backgroundColor = 'green';
    } else {
        plataformasSeleccionadas = plataformasSeleccionadas.filter(item => item !== valor);
        button.style.backgroundColor = '';
    }

    localStorage.setItem('plataformasSeleccionadas', JSON.stringify(plataformasSeleccionadas));
};

async function addButtonsGnr() {
    const btnsGnr = document.querySelector('.containGnr');
    const generos = await getAllGenr();

    generos.forEach(gnr => {
        const { Genero } = gnr;
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'select-button-gnr';
        button.value = Genero;
        button.textContent = Genero;

        button.addEventListener('click', () => {
            handleGenreSelection(button);
        });

        btnsGnr.appendChild(button);
    });
}

const handleGenreSelection = (button) => {
    const valor = button.value;
    let generosSeleccionados = JSON.parse(localStorage.getItem('generosSeleccionados')) || [];

    if (!generosSeleccionados.includes(valor)) {
        generosSeleccionados.push(valor);
        button.style.backgroundColor = 'green';
    } else {
        generosSeleccionados = generosSeleccionados.filter(item => item !== valor);
        button.style.backgroundColor = '';
    }

    localStorage.setItem('generosSeleccionados', JSON.stringify(generosSeleccionados));
};


async function addOptsClsf(){
    const selectClsf = document.querySelector('#containClsf');
    const clasificaciones = await getAllClsf();

    clasificaciones.forEach(clsf => {
        const {Clasificacion, _id} = clsf;
        selectClsf.innerHTML += `
            <option value="${_id}">${Clasificacion}</option>
        `
    })
}


///////////////////// INGRESAR NUEVA CATG ///////////////////////////////////////
const formGame = document.getElementById('formulario');
formGame.addEventListener('submit', newGame);

async function newGame(e){
    e.preventDefault();

    const Nombre = document.getElementById('nombre').value;
    const Precio = parseFloat(document.getElementById('precio').value);
    const Stock = parseFloat(document.getElementById('stock').value);
    const Plataforma = JSON.parse(localStorage.getItem('plataformasSeleccionadas'));
    const Genero = JSON.parse(localStorage.getItem('generosSeleccionados'));
    const Clasificacion = document.getElementById('containClsf').value;
    const Descripcion = document.getElementById('descripcion').value;

    const registGame = {
        Nombre,
        Plataforma,
        Genero,
        Clasificacion,
        Descripcion,
        Precio,
        Stock
    };

    await addNewGame(registGame);

    localStorage.removeItem('plataformasSeleccionadas');
    localStorage.removeItem('generosSeleccionados');
}

