import { NextFunction, Request, Response } from "express";
import { Users } from "../types/user";

const secretKey = '12345';

export function authMiddleware(req:Request, res:Response, next:NextFunction) {
    const key = req.query.key;
    if (key === secretKey){
        const user: Users = {
            id: '1',
            name: 'John Doe'
        }
        req.user = user;
        return next();
    }
    res.sendStatus(401)
}