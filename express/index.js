require('dotenv').config()
const express = require('express');
const routes = require('./src/routes');

const port = process.env.PORT || 3000;

const nodeEnv = process.env.NODE_ENV;

const app = express();

app.use(routes);

if(nodeEnv == 'dev') {
    app.get('/version', (req, res) => {
        res.send('0.0.1');
    })
}

app.listen(port, function() {
    console.log(`App esta escuchando en el puerto ${port}`);
})
