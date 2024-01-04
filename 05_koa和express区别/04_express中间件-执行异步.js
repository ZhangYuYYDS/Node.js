const express = require('express');
const axios = require('axios');

const app = express();

const middleware1 = (req, res, next) => {
  req.message = 'aaa';
  next();
  // 返回值结果失败
  res.end(req.message);
};

const middleware2 = (req, res, next) => {
  req.message += 'bbb';
  next();
};

const middleware3 = (req, res, next) => {
  // express中间件的执行不会等待异步操作的完成
  //   使用 await 和async也不行，因为await next()默认返回的是viod，是不会等异步结果的
  // 因此在第一个中间件中响应的数据仅为: aaabbb
  axios.get('http://123.207.32.32:9001/lyric?id=167876').then((result) => {
    req.message += result.data.lrc.lyric;
  });

  // 所以只能在这里进行结果的返回
  res.json(req.msg);
};

app.use(middleware1, middleware2, middleware3);

app.listen(8000, () => {
  console.log('服务器开启成功');
});
