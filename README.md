一个基于koa的脚手架
可以快速搭建mvc框架
插件：sequelize，koa-error,koa-json,koa-views,koa-bodyparser,koa-logger
config ----------数据库 及 各种配置项
logs   ----------request 以及 响应的参数和错误
controller ------引用服务的各种方法 页面逻辑
public ----------静态资源
middlewares -----中间件处理
route  ----------路由
view   ----------模板引擎

添加中间件：
  在入口文件 app.js中
  const MIDDLEWARES = ['log','error'] push进去参数即可
  
   
