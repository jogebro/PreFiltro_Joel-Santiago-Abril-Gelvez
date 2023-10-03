const express = require('express');
const cors = require('cors')
const { dbConnection } = require('../database/db.js');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            games: "/games",
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
    }

    routes(){
        this.app.use(this.paths.games, require('../routers/games.routes.js'))
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server running in port: ${this.port}`);
        })
    }
}

module.exports = Server;