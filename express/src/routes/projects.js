const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Lista de proyectos');
})

router.post('/', (req, res) => {
    res.send('Crear un proyecto');
})

module.exports = router;