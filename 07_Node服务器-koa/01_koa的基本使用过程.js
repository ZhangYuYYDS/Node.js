const Koa = require('koa');

// 创建app对象
const app = new Koa();

// 注册中间件
// 两个参数：ctx,next
app.use((ctx, next) => {
    console.log('中间件被执行');
    ctx.response.body = 'hello koa';
});

// 启动服务器
app.listen(8000, () => {
    console.log('Koa初体验服务器启动成功');
});