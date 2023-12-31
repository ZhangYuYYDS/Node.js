import http from 'http';

// 服务器如何能够拿到客户端传递过来的数据？
const server = http.createServer((resquest, response) => {
    //   获取参数：body参数
    // request对象本质上是readonly可读流
    resquest.setEncoding('utf-8');

    let isLogin = false;
    resquest.on('data', (data) => {
        console.log(data);
        const loginInfo = JSON.parse(data);
        if (loginInfo.name === 'zy' && loginInfo.password == '123456') {
            isLogin = true;
        } else {
            isLogin = false;
        }
    });

    resquest.on('end', () => {
        if (isLogin) {
            response.end('登陆成功');
        } else {
            response.end('登录失败');
        }
    });
});

server.listen(3000, () => {
    console.log('服务器已开启');
});
