const Games = require('../models/Videogames.js');

const getAllGames = async (req, res)=>{
    try {
        const data = await Games.find()
        .populate({
            path: 'Clasificacion',
            select: 'Clasificacion -_id'
        })
        res.json(data)
    } catch (error) {
        console.log(error);
    }
}

const addNewGame = async (req, res)=>{
    try {
        const {Nombre, Imagen, Plataforma, Genero, Clasificacion, Descripcion, Precio, Stock} = req.body;
        const data = new Games({Nombre, Imagen, Plataforma, Genero, Clasificacion, Descripcion, Precio, Stock});
        await data.save();
        res.json(data)
    } catch (error) {
        console.log(error);
    }
}

const deleteGame = async (req, res) => {
    try {
        const gameId = req.params.id;
        const data = await Games.findOneAndRemove({_id: gameId})
        res.json('Juego elimidado con exito')
    } catch (error) {
        console.log(error);
    }
}

const updateGame = async (req, res) => {
    try {
        const gameId = req.params.id;
        const updateData = req.body;

        const updatedGame = await Games.findOneAndUpdate(
            { _id: gameId },
            { $set: updateData },
            { new: true }
        );

        res.json(updatedGame);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllGames,
    addNewGame,
    deleteGame,
    updateGame
}