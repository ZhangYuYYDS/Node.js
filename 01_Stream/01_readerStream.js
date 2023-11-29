import * as fs from 'fs';

var data = '';

// 创建一个可读流
var readerStream = fs.createReadStream('./input.txt');

// 设置编码为utf8
readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
// 当有数据可读时触发data事件
readerStream.on('data', function (chunk) {
    data += chunk;
    console.log('222', chunk);
});

// 没有更多的数据可读时触发
readerStream.on('end', function () {
    console.log('111', data);
});

// 在接受和写入错误时触发
readerStream.on('error', function (err) {
    console.log(err.stack);
});

console.log('程序执行完毕');
