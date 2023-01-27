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
        console.log(err)
        return err;
    } else {
        console.log('connected to db')
    }
})

module.exports = connection;