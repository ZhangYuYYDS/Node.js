import * as fs from 'fs';

// 想做的事情：通过流的操作进行文件拷贝

// 方式一：一次性读取和写入
// fs.readFile('./input.txt', (err, data) => {
//     fs.writeFile('./output.txt', data, (err) => {
//         console.log('文件拷贝完成');
//     });
// });

// 方式二：创建可读流和可写流
// // 创建一个可读流
let createReadStream = fs.createReadStream('./input.txt');

// 创建一个可写流
let createWriteStream = fs.createWriteStream('./output.txt');

// 1.以流的方式写入
// createReadStream.on('data', (chunk) => {
//     createWriteStream.write(chunk);

//     createWriteStream.on('end', () => {
//         createWriteStream.close();
//     });
// });

// 2. 管道读写流：将可读流中的内容写入可写流中
createReadStream.pipe(createWriteStream);

console.log('程序执行完毕');
