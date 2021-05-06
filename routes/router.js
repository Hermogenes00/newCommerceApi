let express = require('express')
let router = express.Router()

//Import controllers
let UserController = require('../controller/UserController')
let ClientController = require('../controller/ClientController')
let OrderController = require('../controller/OrderController')

//User routes
router.get('/user', UserController.findAll)
router.get('/user/:id', UserController.findById)
router.get('/user/findByEmail/:email', UserController.findByEmail)

router.post('/user', UserController.create)
router.put('/user', UserController.update)
router.delete('/user/:id', UserController.delete)

//Clients routes
router.get('/client', ClientController.findAll)
router.get('/client/:id', ClientController.findById)
router.get('/client/findByEmail/:email', ClientController.findByEmail)
router.get('/client/findWithOrders/:id?', ClientController.findAllWithOrders)

router.post('/client', ClientController.create)
router.put('/client', ClientController.update)
router.delete('/client/:id', ClientController.delete)


//Order routes
router.get('/order/findByCliente/:id', OrderController.findByClient)








module.exports = router