let express = require('express');
let router = express.Router();

const InstitucionalController = require('../controller/InstitucionalController');




router.get('/', InstitucionalController.findAll);
router.get('/:id', InstitucionalController.findById);

router.post('/', InstitucionalController.create);
router.put('/', InstitucionalController.update);
router.delete('/:id', InstitucionalController.delete);


module.exports = router