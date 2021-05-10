let express = require('express');
let router = express.Router();

const ProductController = require('../controller/ProductController');

router.get('/', ProductController.findAll);
router.get('/:id', ProductController.findById);


router.post('/', ProductController.create);
router.put('/', ProductController.update);
router.delete('/:id', ProductController.delete);


module.exports = router