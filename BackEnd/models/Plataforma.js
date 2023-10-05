const { model, Schema } = require('mongoose');

const PlataformaSchema = ({
    Plataforma: {
        type: String,
        required: [true, "Nombre del Juego REQUERIDO"]
    }
})

module.exports = model("Plataforma", PlataformaSchema, "Plataformas")