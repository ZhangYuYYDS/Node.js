const express = require('express');

const app = express();

const middleware1 = (req, res, next) => {
  req.message = 'aaa';
  // 会先执行中间件2，然后都执行完成之后才会返回值结果
  next();
  // 返回值结果
  res.end(req.message);
};

const middleware2 = (req, res, next) => {
  req.message += 'bbb';
  next();
};

const middleware3 = (req, res, next) => {
  req.message += 'ccc';
};

app.use(middleware1, middleware2, middleware3);

app.listen(8000, () => {
  console.log('服务器开启成功');
});
