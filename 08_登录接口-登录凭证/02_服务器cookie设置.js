import koa from 'koa';
import KoaRouter from '@koa/router';

const app = new koa();

const userRouter = new KoaRouter({ prefix: '/users' });
userRouter.get('/login', (ctx, next) => {
    // 在服务器中，为我们登录的客户端来设置一个cookie
    ctx.cookies.set('slogan', 'yyds', {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7天过期
    });
    ctx.body = '登录成功！';
});
userRouter.get('/list', (ctx, next) => {
    // 验证用户的登录凭证：携带口号 yyds
    // 在同一个作用域下当发送请求时，如果没有过期自动会携带cookie：yyds
    ctx.body = '登录成功~';
});
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.listen(3000, () => {
    console.log('successful~');
});
