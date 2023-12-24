import http from 'http';

const server = http.createServer((resquest, response) => {
    const url = resquest.url;

    if (url == '/login') {
        response.end('登录成功');
    } else if (url == '/products') {
        console.log('查询数据，查到数据后拼接');
        response.end('商品列表');
    }
});

server.listen(3000, () => {
    console.log('服务器已开启');
});
