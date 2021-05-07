let express = require('express');
let router = express.Router();

//Import controller
const UserController = require('../controller/UserController');

//User routes
router.get('/', UserController.findAll);
router.get('/:id', UserController.findById);
router.get('/findByEmail/:email', UserController.findByEmail);

router.post('/', UserController.create);
router.put('/', UserController.update);
router.delete('/:id', UserController.delete);

module.exports = router