import express, {Request, Response} from 'express';
import routes from './routes';

const app = express();

const port = process.env.PORT || 3000

app.get('', (req: Request, res: Response) => {
    res.send('Api works!');
})

app.use(routes);

app.listen(port, () => {
    console.log(`App is running in port ${port}`)
})