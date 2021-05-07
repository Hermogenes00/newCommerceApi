let express = require('express');
let router = express.Router();

const ItemOrderController = require('../controller/ItemOrderController');


router.get('/', ItemOrderController.findAll);
router.get('/:id', ItemOrderController.findById);

router.post('/', ItemOrderController.create);
router.put('/', ItemOrderController.update);
router.delete('/:id', ItemOrderController.delete);


module.exports = router