import { Request, Response } from "express";

export class RolesController {
    listAll( req: Request, res: Response) {
        res.send([]);
    }
}

const rolesController = new RolesController();
export default rolesController;