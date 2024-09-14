const user = require("../modules/user");

class UsersController {
    getAll(req, res){
        const users = user.find();
        res.send(users)
    }

    getById(req, res) {
        const userId = req.params.id;
        res.send(`Datos del usuario ${userId}`)
    }

    createUser(req, res) {
        res.send(`user created`);
    }
}

module.exports = new UsersController();