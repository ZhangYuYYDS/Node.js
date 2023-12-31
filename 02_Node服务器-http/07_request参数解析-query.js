import http from 'http';
import url from 'url';
import qs from 'querystring';

// 服务器如何能够拿到客户端传递过来的数据？
const server = http.createServer((resquest, response) => {
    // 1. 参数一：query类型参数:直接拼接在url中的参数
    // url模块提供了一个方法：parse方法，可以用于解析url
    const urlString = resquest.url;
    // @ts-ignore
    const urlInfo = url.parse(urlString);

    const queryString = urlInfo.query;
    const queryInfo = qs.parse(queryString);

    console.log(queryInfo.name, queryInfo.age);

    response.end('hello world');
});

server.listen(3000, () => {
    console.log('服务器已开启');
});
