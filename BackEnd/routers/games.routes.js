const { Router } = require('express');
const {getAllGames} = require('../controllers/games.controller.js')

const router = Router();

router.get("/", getAllGames)

module.exports = router;