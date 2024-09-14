import { Request, Response } from "express";

export class UsersController {
    findAll( req: Request, res: Response) {
        res.send([]);
    }
}

const usersController = new UsersController();
export default usersController;