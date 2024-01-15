import mysql from 'mysql2';

// 1. 创建连接池
const connectionPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'Zy.010206',
    database: 'coderhub',
    connectionLimit: 5,
});

// 2. 获取连接是否成功
connectionPool.getConnection((err, connection) => {
    // 判断是否有错误信息
    if (err) {
        console.log('连接失败', err);
        return;
    }
    // 2. 获取connection，尝试和数据库建立连接
    connection.connect((err) => {
        if (err) {
            console.log('和数据库交互失败', err);
        } else {
            console.log('和数据库交互成功，可以操作数据库啦~');
        }
    });
});

// 3. 获取连接池中连接对象（pormise）
const connection = connectionPool.promise();

class UserService {
    async create(user) {
        // 1. 获取用户user
        const { name, password } = user;

        // 2. 拼接statement
        const statement = 'INSERT INTO `user` (name, password) VALUES (?,?)';

        // 3. 执行SQL语句
        const [result] = await connection.execute(statement, [name, password]);
        return result;
    }

    async findUserByName(name) {
        const statement = 'SELECT * FROM `user` WHERE name = ?';
        const [values] = await connection.execute(statement, [name]);
        return values;
    }
}

export default new UserService();
