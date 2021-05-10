let express = require('express');
let router = express.Router();

const ClientController = require('../controller/ClientController');




router.get('/', ClientController.findAll);
router.get('/:id', ClientController.findById);
router.get('/findByEmail/:email', ClientController.findByEmail);

router.post('/', ClientController.create);
router.put('/', ClientController.update);
router.delete('/:id', ClientController.delete);


module.exports = router