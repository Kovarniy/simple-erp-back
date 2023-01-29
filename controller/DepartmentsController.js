const response = require('../response');
const db = require('../settings/db');

exports.getAll = (req, res) => {
    const sql = "SELECT * FROM departments";

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

    const sql = "SELECT * FROM departments WHERE id=" + req.params.id;

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
    const sql = "INSERT INTO departments(name, description) " +
        "VALUES('" + req.body.name + "', '" + req.body.description + "')";

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

    const sql = "UPDATE `departments` " +
        "SET `name`='" + req.body.name + "',`description`='" + req.body.description + "'" +
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
    const sql = "DELETE FROM departments WHERE id=" + req.params.id;

    db.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            response.status(500, {message: err});
        } else {
            response.status(results, res);
        }
    })
}