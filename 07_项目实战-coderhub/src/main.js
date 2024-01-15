import app from './app/index.js';

// 每次都执行一次错误函数
import './utils/handle-error.js';

app.listen(3000, () => {
    console.log('sucessful~');
});
