import http from 'http';

// 服务器如何能够拿到客户端传递过来的数据？
const server = http.createServer((resquest, response) => {
    // response对象本质上是一个可写流

    // 方式一
    // response.statusCode = 201;

    // 方式二：setHead 响应头
    response
        .writeHead(201, {
            'Content-Length': 10,
            'Content-Type': 'text/plain',
        })
        .end('服务器已创建');
});

server.listen(3000, () => {
    console.log('服务器已开启');
});
