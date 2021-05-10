let express = require('express');
let router = express.Router();

const SlideController = require('../controller/SlideController');


router.get('/', SlideController.findAll);
router.get('/:id', SlideController.findById);

router.post('/', SlideController.create);
router.put('/', SlideController.update);
router.delete('/:id', SlideController.delete);


module.exports = router