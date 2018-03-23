const user = require('../model/user')
class UserServer {
	constructor(){

	}
	async findAllUser(){
		let result = await user.findAll();
		return result
	}
}
module.exports = new UserServer()