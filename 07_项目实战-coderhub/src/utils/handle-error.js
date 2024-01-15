import app from '../app/index.js';

app.on('error', (err, ctx) => {
    let code = 0;
    let message = '';
    console.log(err);
    switch (err) {
        case 'name_and_password_is_required':
            code = -1001;
            message = '用户名和密码不能为空';
            break;
        case 'name_already_exists':
            code = -1002;
            message = '用户名已存在';
            break;
        case 'name_is_not_exists':
            code = -1003;
            message = '用户名不存在';
            break;
        case 'password_is_not_correct':
            code = -1004;
            message = '密码不正确';
            break;
        case 'token_is_uneffect':
            code = -1005;
            message = 'token已失效';
            break;
    }

    ctx.body = { code, message };
});
