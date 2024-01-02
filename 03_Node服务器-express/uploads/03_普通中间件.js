import express from 'express';

// 1. 创建express服务器
const app = express();

// 通过use方法注册的中间件是最普通的/简单的中间件，无论什么请求方式都可以匹配上
app.use((req, res, next) => {
    console.log('中间件被执行');
    next();
});

app.use((req, res, next) => {
    console.log('第二个中间件被执行');
});

// 2. 启动服务器，并且监听端口
app.listen(8000, () => {
    console.log('服务器启动成功');
});
