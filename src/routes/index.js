const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.json({
        message: 'Hello World 🌎',
    });
});

router.use('/users', require('./user'));

module.exports = router;
