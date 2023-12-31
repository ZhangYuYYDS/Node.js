import http, { request } from 'http';

// 服务器如何能够拿到客户端传递过来的数据？
const server = http.createServer((resquest, response) => {
    // response对象本质上是一个可写流

    // 方式一：
    response.setHeader('Content-Type', 'text/plain;charset=utf8');

    // 方式二：
    response.writeHead(201, {
        'Content-Type': 'text/plain;charset=utf8',
    });

    // 如果是复杂数据，直接写
    const list = [
        { name: 'zy', age: 19 },
        { name: 'kk', age: 90 },
    ];
    response.end(JSON.stringify(list));
});

server.listen(3000, () => {
    console.log('服务器已开启');
});
