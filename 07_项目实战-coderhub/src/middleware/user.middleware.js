import userService from '../service/user.service.js';
import { md5password } from '../utils/md5-password.js';

export const verifyUser = async (ctx, next) => {
    // （1）验证用户名和密码是否为空
    const { name, password } = ctx.request.body;
    if (!name || !password) {
        return ctx.app.emit('error', 'name_and_password_is_required', ctx);
    }

    // （2）验证用户名是否已经被注册
    const users = await userService.findUserByName(name);
    if (users.length) {
        return ctx.app.emit('error', 'name_already_exists', ctx);
    }
    // 当验证都通过时：
    // 再执行下一个中间件：用于将数据存储到数据库中
    await next();
};

export const handlePassword = async (ctx, next) => {
    // 1. 取出密码
    const { password } = ctx.request.body;

    // 2. 对密码进行加密
    ctx.request.body.password = md5password(password);

    // 3. 执行下一个中间件
    await next();
};
