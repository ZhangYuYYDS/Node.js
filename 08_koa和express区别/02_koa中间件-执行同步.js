const Koa = require('koa');

const app = new Koa();

// 注册中间件
app.use((ctx, next) => {
  ctx.msg = 'aaa';
  next();
  ctx.body = ctx.msg;
});

app.use((ctx, next) => {
  ctx.msg += 'bbb';
  next();
});

app.use((ctx, next) => {
  ctx.msg += 'ccc';
});

app.listen(8000, () => {
  console.log('服务器开启成功');
});

/**
 * 输出结果aaabbbccc
 * 执行顺序：先向下执行，然后在向上执行
 */
