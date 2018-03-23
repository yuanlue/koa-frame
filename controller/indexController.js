const user_server = require('../service/userServer')
class indexController {
	constructor(){

	}
	async index(ctx, next){
		//user.findOrCreate({where: {username: 'sdepold'}, defaults: {birthday: '2018-03-22 17:02:25',datetime:'2018-03-22 17:02:45'}})
  		let result =await user_server.findAllUser()
  		ctx.body=result
	}
	async string(ctx, next){
  		ctx.body = 'koa2 string'
	}
	async json(ctx, next){
		ctx.body = {
		    title: 'koa2 json'
		  }
		}
}
module.exports = new indexController()