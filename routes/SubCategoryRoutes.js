let express = require('express');
let router = express.Router();

const SubCategoryController = require('../controller/SubCategoryController');

router.get('/', SubCategoryController.findAll);
router.get('/:id', SubCategoryController.findById);

router.post('/', SubCategoryController.create);
router.put('/', SubCategoryController.update);
router.delete('/:id', SubCategoryController.delete);


module.exports = router