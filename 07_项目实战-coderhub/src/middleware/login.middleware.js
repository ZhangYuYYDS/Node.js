import userService from '../service/user.service.js';
import { md5password } from '../utils/md5-password.js';
import jwt from 'jsonwebtoken';
import { pubilcKey } from '../config/screct.js';

export const verifyLogin = async (ctx, next) => {
    // 中间件操作：
    // （1）验证用户名和密码是否为空
    const { name, password } = ctx.request.body;
    if (!name || !password) {
        return ctx.app.emit('error', 'name_and_password_is_required', ctx);
    }

    // （2）验证用户名是否已经被注册
    const users = await userService.findUserByName(name);
    const user = users[0];
    if (!user) {
        return ctx.app.emit('error', 'name_is_not_exists', ctx);
    }
    // （3）查询数据库中用户名和密码和传递过来的是否一致
    if (user.password !== md5password(password)) {
        return ctx.app.emit('error', 'password_is_not_correct', ctx);
    }

    // 将user的信息保存到ctx中
    ctx.userInfo = user;

    // 当验证都通过时：
    // 再执行下一个中间件：用于将数据存储到数据库中
    await next();
};

export const verifyAuth = async (ctx, next) => {
    // （1）获取token
    const authorization = ctx.headers.authorization;
    const token = authorization.replace('Bearer ', '');

    // （2）验证token是否是有效的
    try {
        // result中有token的信息
        const result = jwt.verify(token, pubilcKey, { algorithms: ['RS256'] });
        ctx.body = '可以login/test接口';

        // （3）将token中的信息保留下来
        ctx.user = result;

        // 执行下一个中间件
        await next();
    } catch (err) {
        return ctx.app.emit('error', 'token_is_uneffect', ctx);
    }
};
