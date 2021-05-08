let express = require('express');
let router = express.Router();

const CategoryController = require('../controller/CategoryController');

router.get('/', CategoryController.findAll);
router.get('/:id', CategoryController.findById);

router.post('/', CategoryController.create);
router.put('/', CategoryController.update);
router.delete('/:id', CategoryController.delete);


module.exports = router