const Router = require('express');
const versionController = require('../controllers/versionController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');
const router = new Router();


router.post('/',checkRoleMiddleware('ADMIN'),versionController.create)
router.get('/',versionController.getAll)


module.exports=router;