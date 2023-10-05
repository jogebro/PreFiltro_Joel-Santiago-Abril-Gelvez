const { model, Schema } = require('mongoose');

const GeneroSchema = Schema({
    Genero: {
        type: String,
        required: [true, "Nombre del Juego REQUERIDO"]
    }
})

module.exports = model("Genero", GeneroSchema, "Generos")