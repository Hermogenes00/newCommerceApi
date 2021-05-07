let express = require('express');
let router = express.Router();

const OrderController = require('../controller/OrderController');

router.get('/order', OrderController.findAll);
router.get('/order/:id', OrderController.findById);

router.post('/order', OrderController.create);
router.put('/order', OrderController.update);
router.delete('/order', OrderController.delete);


module.exports = router