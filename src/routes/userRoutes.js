const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/listar', userController.mostrarUsuarios);
router.post('/criar', userController.criarUsuario);

module.exports = router;