const Koa = require('koa');
const koaRouter = require('@koa/router')
const multer = require('@koa/multer')

// 创建app对象
const app = new Koa();

// const upload = multer({
//     // 创建uploads文件夹
//     dest: './uploads'
// })

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, cb) {
            // 设置文件夹名
            cb(null, './uploads/');
        },
        filename(req, file, cb) {
            // 设置后缀名
            cb(null, Date.now() + "_" + file.originalname);
        }
    })
})

// 创建路由对象
const userRouter = new koaRouter({ prefix: '/upload' })

userRouter.post('/avatar', upload.single('avatar'), (ctx, next) => {
    // 图片的信息
    console.log(ctx.request.file)
    // ctx.body用于向客户端返回数据
    ctx.body = '文件上传成功'
});

// 让路由中的中间件生效
app.use(userRouter.routes());
// 如果遇到上述没有注册过的method，会返回Method Not Allowed
app.use((userRouter.allowedMethods()));

// 启动服务器
app.listen(8000, () => {
    console.log('Koa服务器启动成功!');
});