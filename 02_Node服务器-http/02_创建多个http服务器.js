import http from 'http';

const server1 = http.createServer((resquest, response) => {
    response.end('3000hello world');
});

server1.listen(3000, () => {
    console.log('3000服务器已开启');
});

const server2 = http.createServer((resquest, response) => {
    response.end('3001hello world');
});

server2.listen(3001, () => {
    console.log('3001服务器已开启');
});
