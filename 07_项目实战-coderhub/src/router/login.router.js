import KoaRouter from '@koa/router';
import loginController from '../controller/login.controller.js';
import { verifyLogin, verifyAuth } from '../middleware/login.middleware.js';

// 1. 创建路由
const loginRouter = new KoaRouter({ prefix: '/login' });

// 2. 定义路由中的映射
loginRouter.post('/', verifyLogin, loginController.sign);
// 写一个测试接口，用于测试一下token是否生效
loginRouter.get('/test', verifyAuth, loginController.test);

// 3. 导出路由
export default loginRouter;
