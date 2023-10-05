const Genero = require('../models/Genero.js');

const getAllGeneros = async (req, res)=>{
    try {
        const data = await Genero.find();
        res.json(data)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllGeneros,
}