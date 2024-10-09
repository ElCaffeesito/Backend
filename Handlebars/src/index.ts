import axios from "axios";
import express from "express";
import path from "path";
import { engine } from "express-handlebars"


const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, '..', 'views'));

const port = process.env.PORT || 3000;

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('', (req, res) => {
    const url = path.join(__dirname, '..', 'views', 'index.html');
    res.sendFile(url);
})

app.get('/usuarios', (req, res) => {
    //Get de usuarios
    axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
        //res.send(response.data);
        const users = response.data
        res.render('usuarios', {
            users
        })
        // res.send(users)
    }).catch( e => {
        res.send({error: e})
    })
})

app.listen(port, () => {
    console.log('App is running in port: ',port);
})