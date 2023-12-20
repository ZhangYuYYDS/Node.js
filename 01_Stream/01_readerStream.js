import * as fs from 'fs';

var data = '';

// 创建一个可读流
var readerStream = fs.createReadStream('./input.txt', {
    start: 0,
    end: 5,
    autoClose: true, // 设置为true后，表示自动关闭文件
    encoding: 'utf8',
    highWaterMark: 3, //3个3个读
});

// 设置编码为utf8
// readerStream.setEncoding('utf8');

// 处理流事件 --> data, end, and error
// 当有数据可读时触发data事件
readerStream.on('data', function (chunk) {
    // 根据输出可以看出String+Buffer=String
    data += chunk;
    console.log('222', chunk);

    // 可以暂停
    readerStream.pause();

    setTimeout(() => {
        // 可以恢复
        readerStream.resume();
    }, 2000);
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
