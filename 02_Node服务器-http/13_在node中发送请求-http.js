import http from 'http';

// 1. 使用http模块发送get请求
// http.get('http://localhost:3000', (res) => {
//     //从可读流中获取数据
//     res.setEncoding('utf-8');
//     res.on('data', (data) => {
//         console.log(data);
//     });
// });

// 2. 使用http发送post请求
const res = http.request(
    {
        method: 'POST',
        hostname: 'localhost',
        port: 3000,
    },
    (res) => {
        res.on('data', (data) => {
            console.log(data.toString());
        });
    }
);
// 必须调入end，表示写入完成
res.end();
