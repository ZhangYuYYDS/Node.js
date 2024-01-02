const express = require('express');
// 抽取到/router/userRouter文件中了
const userRouter = require('../router/userRouter');

const app = express();

// 2. 将用户的接口定义在单独的路由对象中

// 让路由生效
app.use('/users', userRouter);

// 启动服务器
app.listen(8000, () => {
    console.log('路由服务器启动成功');
});
