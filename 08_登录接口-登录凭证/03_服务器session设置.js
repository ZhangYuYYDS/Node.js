import koa from 'koa';
import KoaRouter from '@koa/router';
import KoaSession from 'koa-session';

const app = new koa();

const userRouter = new KoaRouter({ prefix: '/users' });

const session = KoaSession(
    {
        key: 'sessionid',
        signed: true,
    },
    app
);
// 加盐操作 
app.keys = ['aaa'];
app.use(session);

userRouter.get('/login', (ctx, next) => {
    // 在服务器中，为我们登录的客户端来设置一个cookie
    ctx.session.slogan = 'yyds';

    ctx.body = '登录成功！';
});
userRouter.get('/list', (ctx, next) => {
    // 验证用户的登录凭证：携带口号 yyds
    // 在同一个作用域下当发送请求时，如果没有过期自动会携带cookie：yyds
    ctx.body = '登录成功~';

    const value = ctx.session.slogan;
    console.log(value);
    if (value === 'yyds') {
        ctx.body = '登录成功~';
    } else {
        ctx.body = '登录失败~';
    }
});

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.listen(3000, () => {
    console.log('successful~');
});
