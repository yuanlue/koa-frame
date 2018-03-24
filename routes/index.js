const router = require('koa-router')()
const index = require('../controller/indexController')
const validation = require('koa-validation');
router.get('/',index.auth,index.index)
router.get('/string',index.string)
router.get('/json',index.json)
router.allowedMethods()
module.exports = router.routes()
