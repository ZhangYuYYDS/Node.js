import http, { request } from 'http';
import fs from 'fs';

// 为什么错误？
// 可以成功写入，但是用别的软件解析的时候并不能成功解析出来
const server = http.createServer((resquest, response) => {
    const writeStream = fs.createWriteStream('./foo.png', {
        flags: 'a+',
    });

    resquest.on('data', (data) => {
        console.log(data);
        writeStream.write(data);
    });

    resquest.on('end', () => {
        console.log('文件传输成功');
        response.end('上传成功');
    });
});

server.listen(3000, () => {
    console.log('服务器已开启');
});
