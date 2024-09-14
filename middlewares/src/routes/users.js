const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");

router.get('/users', auth,(req, res) => {
    res.send([
        {
            id: 1,
            name: 'Pancho',
            email: 'pancho@email.com'
        }
    ]);
})

module.exports = router;