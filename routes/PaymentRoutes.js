let express = require('express');
let router = express.Router();

const AddressController = require('../controller/AddressController');


router.get('/', AddressController.findAll);
router.get('/:id', AddressController.findById);

router.post('/', AddressController.create);
router.put('/', AddressController.update);
router.delete('/:id', AddressController.delete);


module.exports = router