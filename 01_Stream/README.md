#  基本概念

> Stream是一个抽象的数据结构，就像数组或者字符串一样，流是数据的集合。
>
> 不同的是，流可以==每次输出少量的数据，而且它不用存在于内存中。==
>
> 例如，对http服务发起请求的`request/respones`对象就是一个Stream，还有stdout（标准输出）。

图解Stream：

![img](https://gitee.com/zy-010206/typora-images/raw/master/img/173869cb08686702~tplv-t2oaga2asx-jj-mark:3024:0:0:0:q75.png)

Stream就像是水流，但默认是没有水的。

Stream.write可以让水流中有水，也就是**写入数据**，称为source（源头）；

**得到数据**：sink（水池）；

从上向下流动的小圆点是**每次写入的小数据**，称为chunk（块）；、



为什么需要Stream？

流的作用不就是传递数据吗，不用流node也可以实现读写操作，但是读写方式是把文件内容全部读入内存，然后再写入文件，小型文件这么处理问题不大，但是遇到大型文件，就遭不住了。但是流可以把文件资源拆分成小块，一块一块的运输，资源就像水流一样进行传输，减轻服务器的压力。下面会举例子证明！！



Node.js,Stream有四种类型：

- Readable-可读操作
- Writable-可写操作
- Duplex-可读可写操作
- Transform-操作被写入数据，然后读出结果



所有的Stream对象都是EventEmitter的实例。常用的事件有：

- data-当有数据可读时触发
- end-没有更多数据可读时触发
- error-在接收和写入过程中发生错误时触发
- finish-所有数据已被写入到底层系统时触发



# 从流中读取数据

```js
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

```

# 写入流

```js
import * as fs from 'fs';
let data = 'Hello, Node.js';

// 创建一个可以写入的流，写入到文件 output.txt 中
var writerStream = fs.createWriteStream('output.txt');

// 使用 utf8 编码写入数据
writerStream.write(data, 'UTF8');

// 标记文件末尾
writerStream.end();

// 处理流事件 --> finish、error
writerStream.on('finish', function () {
    console.log('写入完成。');
});

writerStream.on('error', function (err) {
    console.log(err.stack);
});

console.log('程序执行完毕');

```

`writerStream.end()`作用:

当调用 `writerStream.end()` 时，它的作用是指示数据流的结束。在 Node.js 中，可写流中的 `end()` 方法表示不会再向流中写入更多数据。

具体来说，在提供的 Node.js 代码中，`writerStream.end()` 的作用如下：

1. **数据写入：** 在调用 `writerStream.write(data, 'UTF8')` 之前，你通过该方法向流中写入数据，这些数据会被流缓冲。

2. **结束信号：** 当调用 `writerStream.end()` 时，它告诉流你已经完成了数据的提供。这可能不会立即关闭流，但它表示不会再写入更多数据。

3. **完成事件：** 当流成功将所有缓冲的数据刷新到底层系统（在这种情况下是文件系统）时，将触发 `finish` 事件。通常在这个事件中执行在流完成写入后应该发生的任务。

```javascript
writerStream.on('finish', function () {
    console.log('写入完成。');
});
```

例如：使用 `finish` 事件来记录一条消息，指示写入过程已经完成。

因此，总体而言，`writerStream.end()` 用于表示数据的结束，并启动写入过程的完成，导致触发 `finish` 事件。

# 管道流

> 管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传递到另外一个流中。

![img](https://www.runoob.com/wp-content/uploads/2015/09/bVcla61)

如上图所示，可以把文件比作水桶，而水就是文件里的内容，我们用一根管子（pipe）连接两个桶，使得水可以从一个桶流入另外一个桶，这样就慢慢的实现了大文件的复制过程。

举个例子：我们通过读取一个文件内容并将内容写入到另外一个文件中

设置 input.txt 文件内容如下：

```
input.txt start
hello node.js
hello zy
input.txt end
```

```js
import * as fs from 'fs';

// 创建一个可读流
let createReadStream = fs.createReadStream('./input.txt');

// 创建一个可写流
let createWriteStream = fs.createWriteStream('./output.txt');

// 管道读写流
createReadStream.pipe(createWriteStream);

console.log('程序执行完毕');

```

查看 output.txt 文件的内容：

```
$ cat output.txt 
input.txt start
hello node.js
hello zy
input.txt end
```