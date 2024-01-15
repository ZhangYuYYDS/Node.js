import KoaRouter from '@koa/router';
import userController from '../controller/user.controller.js';
import { verifyUser, handlePassword } from '../middleware/user.middleware.js';

// 1. 创建路由
const userRouter = new KoaRouter({ prefix: '/users' });

// 2. 定义路由中的映射
// 2.1 用户注册接口
userRouter.post(
    '/',
    // 中间件1：判断此次数据是否需要保存到数据库中
    verifyUser,
    // 中间件2：对密码进行加密
    handlePassword,
    // 中间件3：将数据存储到数据库中
    userController.create
);

// 3. 导出路由
export default userRouter;
