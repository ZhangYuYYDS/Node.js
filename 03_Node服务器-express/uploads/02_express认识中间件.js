import express from 'express';

// 1. 创建express服务器
const app = express();

// 给express创建的app传入一个回调函数
// 传入的这个回调函数就称之为是中间件
app.post('/login', (req, res, next) => {
    // 1. 中间件中可以执行任意代码
    // 打印
    // 查询数据
    // 逻辑判断

    // 2. 在中间件中修改req/res
    // req.age = 90;

    // 3. 可以在中间件中结束响应周期
    // res.json({ message: '成功' });

    // 4. 执行下一个中间件
    next();
});

app.use((req, res, next) => {
    console.log('下一个中间件被执行');
});

// 2. 启动服务器，并且监听端口
app.listen(8000, () => {
    console.log('服务器启动成功');
});
