const { model, Schema } = require('mongoose');

const GameSchema = Schema({
    Nombre: {
        type: String,
        required: true
    },
    Imagen: {
        type: String,
        required: false,
        default: 'no-image.jpg'
    },
    Plataforma: {
        type: Array,
        required: true
    },
    Genero: {
        type: Array,
        required: true
    },
    Clasificacion: {
        type: Schema.Types.ObjectId,
        ref: 'Clasificacion',
        transform: doc => doc.Clasificacion,
        required: true
    },
    Descripcion: {
        type: String,
        required: false,
        default: ''
    },
    Precio: {
        type: Number,
        required: true
    },
    Stock: {
        type: String,
        required: true
    }
})

module.exports = model("VideoJuego", GameSchema, "VideoJuegos")