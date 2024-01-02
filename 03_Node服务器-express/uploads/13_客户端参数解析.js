import express from 'express';

// 1. 创建express服务器
const app = express();

// /login?name=aaa&&age=18
app.post('/login', (req, res, next) => {
    console.log(req.query);
});

// /login/aaa/kkk
app.post('/login/:abc/:hhh', (req, res, next) => {
    console.log(req.params);
});
// 2. 启动服务器，并且监听端口
app.listen(8000, () => {
    console.log('服务器启动成功');
});
