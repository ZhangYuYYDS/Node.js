import http, { request } from 'http';

// 服务器如何能够拿到客户端传递过来的数据？
const server = http.createServer((resquest, response) => {
    // response对象本质上是一个可写流
    response.write('hhaaa ');
    response.end('服务器已创建');
});

server.listen(3000, () => {
    console.log('服务器已开启');
});
