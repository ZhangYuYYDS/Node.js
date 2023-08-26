const Koa = require('koa');
const fs = require('fs');
const app = new Koa();

app.use((ctx, next) => {
  // 响应体内容可以是 Null、Object、Array、String、Buffer、Stream
  // 1. body的类型是string
  //   ctx.body = 'user list data';
  // 2. buffer
  //   ctx.body = Buffer.from('你好');
  //   3.Stream
  //   const readStream = fs.createReadStream('./uploads/1692892923142橙黄色3D广告摄影比赛微信公众号封面.png');
  //   ctx.type = 'image/jpeg';
  //   ctx.body = readStream;
  //   4.body的值是null，自动设置http status code为204
  //   ctx.body = null;
  //   5.body的类型是数据
  ctx.response.body = {
    name: 'zhangyu',
    cup: 'A',
    age: 23,
  };
});

app.listen(8000, () => {
  console.log('koa服务器启动成功');
});
