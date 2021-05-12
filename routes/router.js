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
const InstitucionalRoutes = require('./InstitucionalRoutes')
const PaymentRoutes = require('./PaymentRoutes')
const ProductRoutes = require('./ProductRoutes')
const SlideRoutes = require('./SlideRoutes')
const VariationRoutes = require('./VariationRoutes')
const SubCategoryRoutes = require('./SubCategoryRoutes')
const SupplierRoutes = require('./SupplierRoutes')


//Middleware Authentication
const { auth } = require('../Authentication/auth')


//Use routers
router.use('/user', UserRoutes)
router.use('/client', ClientRoutes)
router.use('/order', auth, OrderRoutes)
router.use('/category', auth, CategoryRoutes)
router.use('/address', auth, AddressRoutes)
router.use('/company', auth, CompanyRoutes)
router.use('/printer', auth, PrinterRoutes)
router.use('/itemorder', auth, ItemOrderRoutes)
router.use('/institucional', auth, InstitucionalRoutes)
router.use('/payment', auth, PaymentRoutes)
router.use('/product', auth, ProductRoutes)
router.use('/slide', auth, SlideRoutes)
router.use('/variation', auth, VariationRoutes)
router.use('/subcategory', auth, SubCategoryRoutes)
router.use('/supplier', auth, SupplierRoutes)


module.exports = router