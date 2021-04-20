const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const typeRouter = require('./typeRouter');
const versionRouter = require('./versionRouter');
const chipRouter = require('./chipRouter');


router.use('/user',userRouter)
router.use('/chip',chipRouter)
router.use('/type',typeRouter)
router.use('/version',versionRouter)


module.exports=router;