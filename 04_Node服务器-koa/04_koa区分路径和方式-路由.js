/**
 * 使用路由：
 * 1. 安装：npm install @koa/router
 */
const Koa = require('koa');
const koaRouter = require('@koa/router');

// 创建app对象
const app = new Koa();

// 创建路由对象
const userRouter = new koaRouter({ prefix: '/users' });

// 在路由中注册中间件：path/method
userRouter.get('/', (ctx, next) => {
  ctx.body = 'user lists';
});
userRouter.put('/', (ctx, next) => {
  ctx.body = 'put request';
});
userRouter.delete('/:id', (ctx, next) => {
  ctx.body = '删除某个用户';
});

// 让路由中的中间件生效
app.use(userRouter.routes());
// 如果遇到上述没有注册过的method，会返回Method Not Allowed
app.use(userRouter.allowedMethods());

// 启动服务器
app.listen(8000, () => {
  console.log('Koa服务器启动成功');
});
