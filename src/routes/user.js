const { Router } = require('express');

const router = Router();

router.post('/', require('../controllers/user'));

module.exports = router;
