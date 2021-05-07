let express = require('express');
let router = express.Router();

const CompanyController = require('../controller/CompanyController');

router.get('/', CompanyController.findAll);
router.get('/:id', CompanyController.findById);

router.post('/', CompanyController.create);
router.put('/', CompanyController.update);
router.delete('/:id', CompanyController.delete);


module.exports = router