const Plataforma = require('../models/Plataforma.js');

const getAllPlataformas = async (req, res)=>{
    try {
        const data = await Plataforma.find();
        res.json(data)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllPlataformas,
}