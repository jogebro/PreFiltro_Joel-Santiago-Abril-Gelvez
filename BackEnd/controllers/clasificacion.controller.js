const Clasificacion = require('../models/Clasificacion.js');

const getAllClasificaciones = async (req, res)=>{
    try {
        const data = await Clasificacion.find();
        res.json(data)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllClasificaciones,
}