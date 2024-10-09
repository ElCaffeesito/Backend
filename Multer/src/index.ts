import express from 'express'
import router from './routes'
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

app.use('/assets', express.static(path.join(__dirname, '..', 'public')));

app.use(router);

app.listen(port, () => {
    console.log(`App is running in port ${port}`);
})