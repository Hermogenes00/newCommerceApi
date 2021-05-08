let express = require('express');
let router = express.Router();


//Import routes
const UserRoutes = require('./UserRoutes')
const ClientRoutes = require('./ClientRoutes')
const OrderRoutes = require('./OrderRoutes')
const CategoryRoutes = require('./CategoryRoutes')
const AddressRoutes = require('./AddressRoutes')
const CompanyRoutes = require('./CompanyRoutes')
const PrinterRoutes = require('./PrinterRoutes')
const ItemOrderRoutes = require('./ItemOrderRoutes')

//Middleware Authentication
const {auth} = require('../Authentication/auth')


//Use routers
router.use('/user', UserRoutes)
router.use('/client', auth, ClientRoutes)
router.use('/order', auth, OrderRoutes)
router.use('/category', auth, CategoryRoutes)
router.use('/address', auth, AddressRoutes)
router.use('/company', auth, CompanyRoutes)
router.use('/printer', auth, PrinterRoutes)
router.use('/itemorder', auth, ItemOrderRoutes)

module.exports = router