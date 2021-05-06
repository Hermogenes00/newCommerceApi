let express = require('express');
let router = express.Router();

//Import controllers
const UserController = require('../controller/UserController');
const ClientController = require('../controller/ClientController');
const OrderController = require('../controller/OrderController');
const CategoryController = require('../controller/CategoryController');
const AddressController = require('../controller/AddressController');

//User routes
router.get('/user', UserController.findAll);
router.get('/user/:id', UserController.findById);
router.get('/user/findByEmail/:email', UserController.findByEmail);

router.post('/user', UserController.create);
router.put('/user', UserController.update);
router.delete('/user/:id', UserController.delete);

//Client routes
router.get('/client', ClientController.findAll);
router.get('/client/:id', ClientController.findById);
router.get('/client/findByEmail/:email', ClientController.findByEmail);
router.get('/client/join/findAllWithOrders/', ClientController.findAllWithOrders);

router.post('/client', ClientController.create);
router.put('/client', ClientController.update);
router.delete('/client/:id', ClientController.delete);

//Order routes
router.get('/order', OrderController.findAll);
router.get('/order/:id', OrderController.findById);

router.post('/order', OrderController.create);
router.put('/order', OrderController.update);
router.delete('/order', OrderController.delete);

//Category routes
router.get('/category', CategoryController.findAll);
router.get('/category/:id', CategoryController.findById);

router.post('/category', CategoryController.create);
router.put('/category', CategoryController.update);
router.delete('/category', CategoryController.delete);

//Address routes
router.get('/address', AddressController.findAll);
router.get('/address/:id', AddressController.findById);

router.post('/address', AddressController.create);
router.put('/address', AddressController.update);
router.delete('/address', AddressController.delete);




module.exports = router