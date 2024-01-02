const express = require('express');

// 创建app对象
const app = express();

// 内置的中间件：直接将一个文件夹作为静态资源
// 可以直接部署到服务器中访问到
// 可以直接将打包后的文件夹部署到服务器
app.use(express.static('XXX'))

// 启动服务器
app.listen(8000, () => {
    console.log('路由服务器启动成功');
}); 