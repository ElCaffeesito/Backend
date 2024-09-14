import { Request, Response } from "express";


class PeluchesControllers {
    getAll(req: Request, res: Response){
        res.send('peluches get all works!');
    }
}

const peluchesControllers = new PeluchesControllers();
export default peluchesControllers;