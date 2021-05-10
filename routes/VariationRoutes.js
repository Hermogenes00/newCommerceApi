let express = require('express');
let router = express.Router();

const VariationController = require('../controller/VariationController');


router.get('/', VariationController.findAll);
router.get('/:id', VariationController.findById);

router.post('/', VariationController.create);
router.put('/', VariationController.update);
router.delete('/:id', VariationController.delete);


module.exports = router