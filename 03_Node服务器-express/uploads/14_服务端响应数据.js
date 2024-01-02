import express from 'express';

// 1. 创建express服务器
const app = express();

app.post('/login', (req, res, next) => {
    // 1. end方法
    // res.end('登录成功');

    //2. res.json方式
    // res.json({
    //     code: 0,
    //     message: 'hello world',
    //     list: [
    //         { name: 'zy', age: 89 },
    //         { name: 'dd', age: 10 },
    //     ],
    // });

    // 3.res/status方法
    res.status(200).send('请求成功');

    console.log(req.params);
});
// 2. 启动服务器，并且监听端口
app.listen(8000, () => {
    console.log('服务器启动成功');
});
