const express = require('express');
const router = express.Router();
const modeloController = require('../controllers/ModeloController');



router.get('/pegaTodasModelos', modeloController.getAllModelos);
router.get('/pegaModelo/:id', modeloController.getModelo);
router.post('/cadastraModelo', modeloController.createModelo);
router.put('/atualizaModelo/:id', modeloController.updateModelo);
router.delete('/deleteModelo/:id', modeloController.deleteModelo);



module.exports = router;