const Router = require('express');
const chipController = require('../controllers/chipController');
const router = new Router();


router.post('/',chipController.create)
router.get('/',chipController.getAll)
router.get('/:id',chipController.getOne)


module.exports=router;