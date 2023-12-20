import * as fs from 'fs';
let data = '张雨';

// 创建一个可以写入的流，写入到文件 output.txt 中
var writerStream = fs.createWriteStream('output.txt', {
    // flags: 'w', // 写入文件操作，文件已存在则清空文件内容
    flags: 'a', // 写入文件操作，文件已存在则追加内容
    // flags: 'wx' // 写入文件操作，若文件已存在则报错
    // flags: 'r+' // 读取文件操作，若文件不存在则报错
    // flags: 'rs+' // 读取文件操作，若文件不存在则报错
    // flags: 'w+' // 读取文件操作，若文件不存在则创建
    // flags: 'wx+' // 读取文件操作，若文件不存在则创建
    // flags: 'a+' // 读取文件操作，若文件不存在则创建
    // flags: 'ax+' // 读取文件操作，若文件不存在则创建
    // flags: 'r' // 读取文件操作，若文件不存在则报错
    // flags: 'rs' // 读取文件操作，若文件不存在则报错,

    start: 2, // 指定写入文件的起始位置
});

// 可以监听到文件被打开
writerStream.on('open', function (fd) {
    console.log('文件被打开了', fd);
});

// 写入数据
writerStream.write(data);

// 标记文件末尾：当我们写入完成后，必须手动调用close/end方法
// close : 关闭流，释放资源
// writerStream.close();
// end : 将最后文件写入文件中，关闭文件
writerStream.end('hhhh');

// 监听文件的关闭事件
writerStream.on('close', function () {
    console.log('文件被关闭');
});

// 处理流事件 --> finish、error
writerStream.on('finish', function () {
    console.log('写入完成。');
});

writerStream.on('error', function (err) {
    console.log(err.stack);
});

console.log('程序执行完毕');
