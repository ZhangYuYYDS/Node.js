const Koa = require('koa');
const koaRouter = require('@koa/router')
const bodyParser = require('koa-bodyparser')
const multer = require('@koa/multer')

// 创建app对象
const app = new Koa();

// 针对json方式和urlencoded方式，使用第三方中间件解析body数据
app.use(bodyParser())

// 针对formdata方式，使用第三方中间件
// 1.方式一
// app.use(multer())
// 2.方式二：将formParser放到中间件中，进行单独解析
const formParser = multer()

// 创建路由对象
const userRouter = new koaRouter({ prefix: '/users' })

/**
 * 1. get:params方式，例如：/:id
 * 2. get:query方式，例如：?name=why&age=18
 * 3. post:json方式，例如：{"name":"zy","age":18}
 * 4. post:x-www-form-urlencoded
 * 5. post:form-data
 */

// 1. get/params
userRouter.get('/', (ctx, next) => {
    const id = ctx.params.id
    ctx.body = 'user lists' + id;
});

// 2.get/query
userRouter.get('/', (ctx, next) => {
    const query = ctx.query
    ctx.body = '用户的query信息' + JSON.stringify(query);
});

// 3. post/json
userRouter.post('/json', (ctx, next) => {
    // 注意：不能从ctx.body中获取数据
    console.log(ctx.request.body)

    // ctx.body用于向客户端返回数据
    ctx.body = '用户的query信息'
});

// 4. post/urlencoded
userRouter.post('/urlencoded', (ctx, next) => {
    // 注意：不能从ctx.body中获取数据
    console.log(ctx.request.body)

    // ctx.body用于向客户端返回数据
    ctx.body = '用户的urlencoded信息'
});

// 5. post/form-data
userRouter.post('/formdata', formParser.any(), (ctx, next) => {
    // 注意：不能从ctx.body中获取数据
    console.log(ctx.request.body)

    // ctx.body用于向客户端返回数据
    ctx.body = '用户的formdata信息'
});

// 让路由中的中间件生效
app.use(userRouter.routes());
// 如果遇到上述没有注册过的method，会返回Method Not Allowed
app.use((userRouter.allowedMethods()));

// 启动服务器
app.listen(8000, () => {
    console.log('Koa服务器启动成功');
});