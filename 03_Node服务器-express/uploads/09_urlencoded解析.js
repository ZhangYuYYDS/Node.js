import express from 'express';

// 1. 创建express服务器
const app = express();

// 应用一些中间件
// 解析客户端传递过来的JSON数据
app.use(express.json());
// 解析客户端传递过来的urlencoded数据
app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res, next) => {
    console.log(req.body);
    // 直接执行逻辑判断
});

// 2. 启动服务器，并且监听端口
app.listen(8000, () => {
    console.log('服务器启动成功');
});
