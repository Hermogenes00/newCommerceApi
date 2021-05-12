let express = require('express');
let router = express.Router();

//Import controller
const UserController = require('../controller/UserController');

//Authentication
const { auth } = require('../Authentication/auth')


//User routes
router.get('/',auth, UserController.findAll);
router.get('/:id',auth, UserController.findById);
router.get('/findByEmail/:email',auth, UserController.findByEmail);

router.post('/auth', UserController.auth);
router.post('/', auth, UserController.create);
router.put('/', auth, UserController.update);
router.delete('/:id', auth, UserController.delete);

module.exports = router