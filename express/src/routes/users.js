const router = require('express').Router();

const usersControllers = require('../controllers/users.controllers');


router.get('', usersControllers.getAll);

/*router.get('/', (req, res) => {
    res.send('Lista de usuarios');
})*/



router.get('/:id', usersControllers.getById)

/*router.get('/:id?', (req, res) => {
    const userId = req.params.id;
    if(userId) {
        res.send(`Datos del usuario ${userId}`)
    } else {
        res.send('Lista de usuarios');
    }
})*/

router.post('/', usersControllers.createUser)

module.exports = router;