const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '',
    database: 'simpleErp'
});

connection.connect(err => {
    if (err) {
        return console.log(err);
    } else {
        return console.log('выполнено подключение к db')
    }
})

module.exports = connection;