const { model, Schema } = require('mongoose');

const GameSchema = Schema({
    Nombre: {
        type: String,
        required: [true, "Nombre del Juego REQUERIDO"]
    },
    Imagen: {
        type: String,
        required: false
    },
    Plataforma: {
        type: String,
        required: [true, "Plataforma del Juego REQUERIDA"]
    },
    Genero: {
        type: String,
        required: false
    },
    Clasificacion: {
        type: String,
        required: [true, "Clasificacion del Juego REQUERIDA"]
    },
    Descripcion: {
        type: String,
        required: false
    },
    Precio: {
        type: Number,
        required: [true, "Precio del Juego REQUERIDO"]
    },
    Stock: {
        type: String,
        required: false
    }
})

module.exports = model("VideoJuego", GameSchema, "VideoJuegos")