import koa from 'koa';
import bodyParser from 'koa-bodyparser';
import userRouter from '../router/user.router.js';
import loginRouter from '../router/login.router.js';
const app = new koa();

// 解析body参数的
app.use(bodyParser());
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());
app.use(loginRouter.routes());
app.use(loginRouter.allowedMethods());

export default app;
