import express from 'express';

// 1. 创建express服务器
const app = express();

app.post('/login', (req, res, next) => {
    // 1. 获取本次请求过程中传递过来的json数据
    req.on('data', (data) => {
        const dataString = data.toString();
        const info = JSON.parse(dataString);
        console.log(info);
        // 2. 判断用户名和密码是否正确
        if (info.username === 'admin' && info.password === '123456') {
            res.end('登录成功');
        } else {
            res.end('登录失败');
        }
    });
    // 3. 结束响应
    res.end('登录失败');
});

app.post('/register', (req, res, next) => {
    let isRegister = false;
    req.on('data', (data) => {
        const dataString = data.toString();
        const info = JSON.parse(dataString);
        // 查询数据库中该用户是否已经注册过
        isRegister = true;
    });

    res.on('end', () => {
        if (isRegister) {
            res.end('该用户已注册');
        } else {
            res.end('注册成功');
        }
        // 结束响应
        res.end('注册失败');
    });
});

// 2. 启动服务器，并且监听端口
app.listen(8000, () => {
    console.log('服务器启动成功');
});
