import { NextFunction, Request, Response } from "express";
import { Users } from "../types/user";



export const roleMiddleware = (roles: string[]) => {
    return (req:Request, res:Response, next:NextFunction) => {
        const role = String(req.query.role || req.user?.role);
        if (roles.includes(role)) {    
            return next();
        }
        res.sendStatus(403)
    }
}
