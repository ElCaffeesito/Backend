const express = require('express');
const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
    res.send("Pagina de inicio")
})

const users = require('./users');
const projects = require('./projects');

router.use('/users', users);
router.use('/projects', projects);

module.exports = router;