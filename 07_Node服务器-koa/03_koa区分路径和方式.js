const Koa = require('koa');

// 创建app对象
const app = new Koa();

// 注册中间件
app.use((ctx, next) => {
    if (ctx.path === './user') {
        if (ctx.method === 'Get') {
            ctx.body = 'user data list'
        } else if (ctx.method === 'Post') {
            ctx.body = 'create user success~'
        }
    }
});

// 启动服务器
app.listen(8000, () => {
    console.log('Koa初体验服务器启动成功');
});