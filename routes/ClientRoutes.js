let express = require('express');
let router = express.Router();

const ClientController = require('../controller/ClientController');




router.get('/client', ClientController.findAll);
router.get('/client/:id', ClientController.findById);
router.get('/client/findByEmail/:email', ClientController.findByEmail);
router.get('/client/join/findAllWithOrders/', ClientController.findAllWithOrders);

router.post('/client', ClientController.create);
router.put('/client', ClientController.update);
router.delete('/client/:id', ClientController.delete);


module.exports = router