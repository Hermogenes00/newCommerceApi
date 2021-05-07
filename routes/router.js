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

//Authentication
const { auth } = require('../Authentication/auth')
//Use routers
router.use('/user', auth, UserRoutes)
router.use('/client', ClientRoutes)
router.use('/order', OrderRoutes)
router.use('/category', CategoryRoutes)
router.use('/address', AddressRoutes)
router.use('/company', CompanyRoutes)
router.use('/printer', PrinterRoutes)
router.use('/itemorder', ItemOrderRoutes)

module.exports = router