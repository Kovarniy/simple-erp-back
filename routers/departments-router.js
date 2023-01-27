const Router = require('express');
const db = require("../settings/db");
const db = require('./settings/db');

const router = new Router();

router.post('/departments', async (req, res) => {
    db.query("SELECT * FROM departments", (err, row, fields) => {
        if (err) {
            console.log(err);
        } else {
            console.log(row)
            console.log(fields)
            res.json(row);
        }
    })
});


router.get('/departments');
router.get('/departments/:id');
router.put('/departments');
router.delete('/departments/:id');

module.exports = router;