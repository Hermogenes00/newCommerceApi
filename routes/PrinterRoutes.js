let express = require('express');
let router = express.Router();

const PrinterController = require('../controller/PrinterController');

router.get('/', PrinterController.findAll);
router.get('/:id', PrinterController.findById);

router.post('/', PrinterController.create);
router.put('/', PrinterController.update);
router.delete('/:id', PrinterController.delete);


module.exports = router