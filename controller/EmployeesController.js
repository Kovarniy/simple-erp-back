const response = require('../response');
const db = require('../settings/db');

exports.getAll = (req, res) => {
    const sql = "SELECT * FROM employees";

    db.query(sql, (err, row, fields) => {
        if (err) {
            console.log(err);
            response.status(500, {message: err});
        } else {
            response.status(row, res);
        }
    })
}

exports.getOne = (req, res) => {
    if (!req.params.id) {
        response.status(400, {message: 'id не указан'});
    }

    const sql = "SELECT * FROM employees WHERE id=" + req.params.id;

    db.query(sql, (err, row, fields) => {
        if (err) {
            console.log(err);
            response.status(500, {message: err});
        } else {
            response.status(row, res);
        }
    })
}

exports.add = (req, res) => {
    const sql = "INSERT INTO employees(firstName, lastName, departmentId) " +
        "VALUES('" + req.body.firstName + "', '" + req.body.lastName + "', '" + req.body.departmentId + "')";

    db.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            response.status(500, {message: err});
        } else {
            response.status(results, res);
        }
    })
}

exports.update = (req, res) => {
    if (!req.body.id) {
        response.status(400, {message: 'id не указан'});
    }

    const sql = "UPDATE `employees`" +
        " SET `firstName`='" + req.body.firstName + "',`lastName`='" + req.body.lastName + "'," +
        " `departmentId`='" + req.body.departmentId + "'" +
        " WHERE id=" + req.body.id

    db.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            response.status(500, {message: err});
        } else {
            response.status(results, res);
        }
    })
}

exports.delete = (req, res) => {
    if (!req.params.id) {
        response.status(400, {message: 'id не указан'});
    }
    const sql = "DELETE FROM employees WHERE id=" + req.params.id;

    db.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            response.status(500, {message: err});
        } else {
            response.status(results, res);
        }
    })
}