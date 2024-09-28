import express from 'express';
import { connect } from 'mongoose';
import { config } from 'dotenv';
import routes from './routes'
config();

const app = express();
const port = process.env.PORT || 3000;

const dbUrl = process.env.DB_URL;
console.log('Mongo URL: ',dbUrl);


connect(dbUrl as string).then(res => {
    console.log('Ya se conecto!');
    app.use(routes)
    app.listen(port, () => {
        console.log(`App is running in port ${port}`);
    })
}).catch(err => {
    console.log('Ocurrio un error');
});