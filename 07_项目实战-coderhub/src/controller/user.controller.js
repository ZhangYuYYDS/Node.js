import userService from '../service/user.service.js';

class UserController {
    async create(ctx, next) {
        // 1.获取用户传递过来的信息
        const user = ctx.request.body;
        // 2.将user信息存储到数据库中
        const result = await userService.create(user);
        // 3.返回处理结果，告知前端创建成功
        ctx.body = {
            message: '用户创建成功',
            data: result,
        };
    }
}

export default new UserController();
