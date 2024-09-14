const auth = (req, res, next) => {
    //next();
    const key = req.query.key;
    if(key == '12345') {
        next();
    } else {
        res.status(401).send('No autenticado');
    }

}

module.exports = auth;