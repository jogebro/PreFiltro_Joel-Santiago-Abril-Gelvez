const { Router } = require('express');
const { getAllClasificaciones } = require('../controllers/clasificacion.controller.js');

const router = Router();

router.get("/", getAllClasificaciones)

module.exports = router;