const { Router } = require('express');
const {getAllGames, addNewGame, updateGame, deleteGame} = require('../controllers/games.controller.js')

const router = Router();

router.get("/", getAllGames),
router.post("/", addNewGame),
router.delete("/:id", deleteGame),
router.put("/:id", updateGame),

module.exports = router;