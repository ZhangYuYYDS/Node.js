import express, { json } from 'express';

// 1. 创建express服务器
const app = express();

//方案一
app.use((req, res, next) => {
    if (req.headers['content-type'] === 'application/json') {
        req.on('data', (data) => {
            const info = JSON.parse(data.toString());
            req.body = info;
        });

        req.on('end', () => {
            next();
        });
    } else {
        next();
    }
});

// 方案二：直接使用express提供给我们的中间
// 等价于方案一
app.use(express.json());

app.post('/login', (req, res, next) => {
    console.log(req.body);
    // 直接执行逻辑判断
});

app.post('/register', (req, res, next) => {
    console.log(req.body);
    // 直接执行逻辑判断
});

// 2. 启动服务器，并且监听端口
app.listen(8000, () => {
    console.log('服务器启动成功');
});
