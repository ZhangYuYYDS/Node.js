import http from 'http';

const server = http.createServer((resquest, response) => {
    const url = resquest.url;
    const method = resquest.method;

    if (url == '/login') {
        if (method === 'POST') {
            response.end('登录成功');
        } else {
            response.end('不支持的请求方式，请检测你的请求方式');
        }
    }
});

server.listen(3000, () => {
    console.log('服务器已开启');
});
