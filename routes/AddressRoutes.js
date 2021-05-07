let express = require('express');
let router = express.Router();

const AddressController = require('../controller/AddressController');


router.get('/address', AddressController.findAll);
router.get('/address/:id', AddressController.findById);

router.post('/address', AddressController.create);
router.put('/address', AddressController.update);
router.delete('/address', AddressController.delete);


module.exports = router