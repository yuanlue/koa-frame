module.exports = app =>{
app.use(async(ctx,next)=>{
	try{
		await next()
	}
	catch(err){
		ctx.respose.status = err.statusCode ||err. status || 500;  
		ctx.body=err
	}
})

}