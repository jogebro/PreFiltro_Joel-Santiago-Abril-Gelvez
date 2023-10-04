const Games = require('../models/Videogames.js');

const getAllGames = async (req, res)=>{
    try {
        const data = await Games.find();
        res.json(data)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllGames,
}