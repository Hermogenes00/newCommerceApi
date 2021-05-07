let express = require('express');
let router = express.Router();

const CategoryController = require('../controller/CategoryController');


router.get('/category', CategoryController.findAll);
router.get('/category/:id', CategoryController.findById);

router.post('/category', CategoryController.create);
router.put('/category', CategoryController.update);
router.delete('/category', CategoryController.delete);


module.exports = router