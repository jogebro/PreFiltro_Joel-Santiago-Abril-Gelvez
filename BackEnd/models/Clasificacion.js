const { model, Schema } = require('mongoose');

const ClasificacionSchema = Schema({
    Clasificacion: {
        type: String,
        required: [true, "Nombre del Juego REQUERIDO"]
    }
})

module.exports = model("Clasificacion", ClasificacionSchema, "Clasificaciones")