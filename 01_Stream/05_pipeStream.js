import * as fs from 'fs';

// 创建一个可读流
let createReadStream = fs.createReadStream('./input.txt');

// 创建一个可写流
let createWriteStream = fs.createWriteStream('./output.txt');

// 管道读写流
createReadStream.pipe(createWriteStream);

console.log('程序执行完毕');
