import http from 'http';

// 创建一个服务器
const server = http.createServer((resquest, response) => {
    // request 中包含本次客户端请求的所有信息，例如，url,method,headers,请求携带的数据

    // response对象用于给客户端返回结果的
    response.end('hello world');
});

// 开启对应的服务器，并告知需要监听的端口
// 服务器开启后，就会一直监听着，不会关闭，所以需要手动关闭
// 在哪里关闭呢？就在createServer()时会执行一个回调函数，在那个回调函数中包含请求的所有信息和响应的结果
server.listen(3000, () => {
    console.log('服务器已开启');
});
