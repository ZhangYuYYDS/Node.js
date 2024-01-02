const Koa = require('koa');

// 创建app对象
const app = new Koa();

// 注册中间件
app.use((ctx, next) => {
    // 1. 请求对象
    console.log(ctx.request) // koa封装的请求对象
    console.log(ctx.req)  // Node封装的请求对象

    // 2. 响应对象
    console.log(ctx.response) // koa封装的响应对象
    console.log(ctx.res)  // Node封装的响应对象

    // 3. 其他属性····
});

// 启动服务器
app.listen(8000, () => {
    console.log('Koa初体验服务器启动成功');
});