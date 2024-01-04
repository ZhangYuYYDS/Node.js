const Koa = require('koa');

const app = new Koa();

app.use((ctx, next) => {
  const isLogin = false;
  if (!isLogin) {
    // EventEmitter
    ctx.app.emit('error', -1003, ctx);
  }
});


// 可以将这部分放到独立的文件中
app.on('error', (err, ctx) => {
  const errCode = err;
  let message = '';
  switch (errCode) {
    case -1001:
      message = '账号或密码错误';
      break;
    case -1002:
      message = '请求参数不正确';
      break;
  }

  const body = {
    err: errCode,
    message,
  };

  ctx.body = body;
});

app.listen(8000, () => {
  console.log('koa服务器启动成功');
});
