import http from 'http';

const server = http.createServer((resquest, response) => {
    console.log('服务器被访问');
    response.end('hello world');
});

server.listen(3000, () => {
    console.log('服务器已开启');
});
