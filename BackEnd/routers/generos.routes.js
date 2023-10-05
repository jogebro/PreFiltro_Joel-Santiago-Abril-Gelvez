const { Router } = require('express');
const { getAllGeneros } = require('../controllers/generos.controller.js')

const router = Router();

router.get("/", getAllGeneros)

module.exports = router;