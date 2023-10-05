const express = require('express');
const cors = require('cors')
const { dbConnection } = require('../database/db.js');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            games: "/games",
            plataformas: "/plataformas",
            generos: "/generos",
            clasificaciones: "/clasificaciones",
        };
        this.connectDB();
        this.middleware();
        this.routes();
    }

    async connectDB(){
        await dbConnection();
    }

    middleware(){
        this.app.use(cors())
        this.app.use(express.json());
        this.app.use(express.static('FrontEnd'));
    }

    routes(){
        this.app.use(this.paths.games, require('../routers/games.routes.js'));
        this.app.use(this.paths.plataformas, require('../routers/plataformas.routes.js'));
        this.app.use(this.paths.generos, require('../routers/generos.routes.js'));
        this.app.use(this.paths.clasificaciones, require('../routers/clasificaciones.routes.js'));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server running in port: ${this.port}`);
        })
    }
}

module.exports = Server;