import mysql from 'mysql2';

// 1. 创建一个连接池（连接上数据库）
const connecction = mysql.createPool({
    host: 'localhost',
    port: 3306,
    database: 'music_db',
    user: 'root',
    password: 'Zy.010206',
    connectionLimit: 5,
});

// 2. 执行一个SQL语句：预处理语句
const statement = 'SELECT * FROM `t_products` WHERE price > ? AND score > ?';
connecction.execute(statement, [1000, 8], (err, values) => {
    console.log(values);
});

// promise的写法
connecction
    .promise()
    .execute(statement, [1000, 8])
    .then(([values]) => {
        // 相当于将values解构出来
        console.log(values);
    })
    .catch((err) => console.log(err));

// async await的写法
async function query() {
    const [values] = await connecction.promise().execute(statement, [1000, 8]);
    console.log(values);
}

query();

// 3. 关闭连接池
connecction.end();
