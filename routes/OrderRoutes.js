let express = require('express');
let router = express.Router();

const OrderController = require('../controller/OrderController');

router.get('/', OrderController.findAll);
router.get('/:id', OrderController.findById);

router.post('/', OrderController.create);
router.put('/', OrderController.update);
router.delete('/:id', OrderController.delete);


module.exports = router