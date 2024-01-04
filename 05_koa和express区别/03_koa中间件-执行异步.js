const Koa = require('koa');
const axios = require('axios');

const app = new Koa();

// 如果执行的下一个中间件是一个异步函数，那么next()默认不会等到中间件的结果，就会执行下一步操作
const middleware1 = async (ctx, next) => {
  ctx.request.message = 'aaa';
  await next();
  ctx.response.body = ctx.request.message;
};

const middleware2 = async (ctx, next) => {
  ctx.request.message += 'bbb';
  // 如果执行的下一个中间件是一个异步函数，那么next默认不会等到中间件的结果，就会执行下一步操作
  // 如果我们希望等待下一个异步函数的执行结果，那么需要在next函数前面加上await
  await next();
};

const middleware3 = async (ctx, next) => {
  const result = await axios.get('http://123.207.32.32:9001/lyric?id=167876');
  ctx.request.message += result.data.lrc.lyric;
};

app.use(middleware1);
app.use(middleware2);
app.use(middleware3);

app.listen(8000, () => {
  console.log('服务器开启成功');
});
