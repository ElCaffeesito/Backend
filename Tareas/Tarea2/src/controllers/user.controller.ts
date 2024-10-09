import { Request, Response } from "express";
import User from '../models/user'
import { HTTP_STATUS_CODES } from "../types/http-status-codes"
import { encryptPassword, isPasswordValid, generateToken } from "./token.controller";

class UserController {

    /*
getAll(req: Request, res: Response) {
    User.find({}).then(response => {
        res.send(response)
    }).catch(error => {
        res.sendStatus(HTTP_STATUS_CODES.SERVER_ERROR);
    })
}*/

    async getAll(req: Request, res: Response) {
        try {
            const users = await User.find();
            res.send(users)
        } catch (e) {
            res.sendStatus(HTTP_STATUS_CODES.SERVER_ERROR)
        }
    }


}

const controller = new UserController();
export default controller;
