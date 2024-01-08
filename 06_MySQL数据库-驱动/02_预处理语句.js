import mysql from 'mysql2';

// 1. 创建一个连接（连接上数据库）
const connecction = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: 'music_db',
    user: 'root',
    password: 'Zy.010206',
});

// 2. 执行一个SQL语句：预处理语句
const statement = 'SELECT * FROM `t_products` WHERE price > ? AND score > ?';
connecction.execute(statement, [1000, 8], (err, values) => {
    console.log(values);
});

// 3. 关闭连接
connecction.destroy();
