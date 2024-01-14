import koa from 'koa';
import KoaRouter from '@koa/router';
import jwt from 'jsonwebtoken';

const app = new koa();

const userRouter = new KoaRouter({ prefix: '/users' });

const secretKey = 'abcdefg';

userRouter.get('/login', (ctx, next) => {
    // 1. 颁发token
    const payload = { id: '1', name: 'zy' };
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
    ctx.body = {
        code: 0,
        token,
        message: '登录成功！',
    };
});
userRouter.get('/list', (ctx, next) => {
    // 1. 获取客户端携带过来的token
    const authorization = ctx.headers.authorization;
    const token = authorization.replace('Bearer ', '');
    console.log(token);
    // 2.验证token

    try {
        const result = jwt.verify(token, secretKey);
        ctx.body = {
            code: 0,
            data: [
                { id: 1, name: 'zy' },
                { id: 2, name: 'yy' },
            ],
        };
    } catch (err) {
        ctx.body = {
            code: -1010,
            message: '无效的token',
        };
    }
});

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.listen(3000, () => {
    console.log('successful~');
});
