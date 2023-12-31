const express = require('express');

const app = express();

// 服务器给客户端返回错误信息的方案：
// 1. code为错误码，res.json为错误信息
// 2. code为正确码，res.json为错误信息

const USERNAME_DOSE_NOT_EXIST = 'username dose not exist';
const USERNAME_ALREADY_EXISTS = 'username already exists';

app.post('/login', (req, res, next) => {
    // 加入数据库中查询用户名时，发现不存在
    const isLogin = false;
    if (isLogin) {
        res.json('user login succeeded');
    } else {
        // next(a):a直接对应下面Switch中的err.message,
        // 然后就会执行对应的代码
        next(new Error(USERNAME_DOSE_NOT_EXIST));
    }
});

app.post('/register', (req, res, next) => {
    const isExists = false;
    if (isExists) {
        res.json('user register succeeded');
    } else {
        next(new Error(USERNAME_ALREADY_EXISTS));
    }
});

// 错误处理的中间件
app.use((err, req, res, next) => {
    let status = 400;
    let message = '';
    switch (err.message) {
        case USERNAME_DOSE_NOT_EXIST:
            message = 'username dose not exist';
            break;
        case USERNAME_ALREADY_EXISTS:
            message = 'username already exists';
            break;
        default:
            message = 'not found';
    }
    res.status(status);
    res.json({
        errCode: status,
        errMessage: message
    });
});

app.listen(8000, () => {
    console.log('路由服务器启动成功');
});