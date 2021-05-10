let express = require('express');
let router = express.Router();

const SupplierController = require('../controller/SupplierController');


router.get('/', SupplierController.findAll);
router.get('/:id', SupplierController.findById);

router.post('/', SupplierController.create);
router.put('/', SupplierController.update);
router.delete('/:id', SupplierController.delete);


module.exports = router