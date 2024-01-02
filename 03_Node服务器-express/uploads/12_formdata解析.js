import express from 'express';
import multer from 'multer';

// 1. 创建express服务器
const app = express();

// 应用一些中间件
// 解析客户端传递过来的JSON数据
// app.use(express.json());
// // 解析客户端传递过来的urlencoded数据
// app.use(express.urlencoded({ extended: true }));
const formdata = multer();

// 上传单文件：single
app.post('/login', formdata.any(), (req, res, next) => {
    console.log(req.body);
    res.end('文件上传成功');
});

// 2. 启动服务器，并且监听端口
app.listen(8000, () => {
    console.log('服务器启动成功');
});
