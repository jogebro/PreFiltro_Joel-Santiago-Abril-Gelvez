const { Router } = require('express');
const { getAllPlataformas } = require('../controllers/plataforma.controller.js')

const router = Router();

router.get("/", getAllPlataformas)

module.exports = router;