const Router = require('express');

const router = new Router();

router.post('/employees');
router.get('/employees');
router.get('/employees/:id');
router.put('/employees');
router.delete('/employees/:id');

module.exports = router;