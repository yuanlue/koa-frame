const user_server = require('../service/userServer')
const Parameter = require('parameter');
const parameter = new Parameter();
const rule = {
		   name: 'string',
		   id:'string'
		};
	class indexController extends Parameter {
		async auth(ctx,next){
		var errors = await parameter.validate(rule,ctx.query);
		if(errors){
				ctx.status = 500
				ctx.body=errors
		}
		else{
				await next()
		}
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