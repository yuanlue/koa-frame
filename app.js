const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const glob = require("glob")
const { resolve } = require('path')
const MIDDLEWARES = ['log','error']
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))
app.use(views(__dirname + '/views', {
  extension: 'pug'
}))
//加载中间件
MIDDLEWARES.forEach(async (item)=>{
	await require(`./middlewares/${item}`)(app)
})
//加载路由
 glob.sync(resolve('routes', './*.js')).forEach(item=>{
 	app.use(require(item))
 })
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
