import jwt from 'jsonwebtoken';
import { privateKey, pubilcKey } from '../config/screct.js';

class LoginController {
    sign(ctx, next) {
        // 其他前置操作都放到了middleware中了
        // 真正的颁发令牌的操作
        const { id, name } = ctx.userInfo;

        const token = jwt.sign({ id, name }, privateKey, { expiresIn: '1h', algorithm: 'RS256' });

        // 返回用户信息
        ctx.body = {
            code: 0,
            data: {
                token,
                id,
                name,
            },
        };
    }

    test(ctx, next) {
        // 必须要验证登录了，才允许访问接下来的东西
        ctx.body = '验证身份通过';
    }
}

export default new LoginController();
