let express = require('express');
let router = express.Router();

const ClientController = require('../controller/ClientController');


//Authentication
const { auth } = require('../Authentication/auth')



router.get('/', auth, ClientController.findAll);
router.get('/:id', auth, ClientController.findById);
router.get('/findByEmail/:email', auth, ClientController.findByEmail);

router.post('/auth', ClientController.auth);
router.post('/', auth, ClientController.create);
router.put('/', auth, ClientController.update);
router.delete('/:id', auth, ClientController.delete);


module.exports = router