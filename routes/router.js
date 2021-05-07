let express = require('express');
let router = express.Router();

//Import routes
const UserRoutes = require('./UserRoutes')
const ClientRoutes = require('./UserRoutes')
const OrderRoutes = require('./OrderRoutes')
const CategoryRoutes = require('./CategoryRoutes')
const AddressRoutes = require('./AddressRoutes')



router.use('/user', UserRoutes)
router.use('/client', ClientRoutes)
router.use('/order', OrderRoutes)
router.use('/category', CategoryRoutes)
router.use('/address', AddressRoutes)




module.exports = router