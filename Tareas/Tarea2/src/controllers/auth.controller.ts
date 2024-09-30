import { Request, Response } from "express";
import auth from '../models/auth';
import { HTTP_STATUS_CODES } from "../types/http-status-codes"
import { generateToken } from "./token.controller";

// Registro
class AuthController {
    registerUser = async (req: Request, res: Response) => {
      const { firstName, email, password, role } = req.body;
  
      try {
        const user = await auth.registerUser(firstName, email, password, role);
        res.status(HTTP_STATUS_CODES.CREATED).json({ message: 'User created' });
      } catch (error) {
        res.status(HTTP_STATUS_CODES.BAD_REQUEST).json({ error: (error as Error).message });
      }
    }
  
    login = async (req: Request, res: Response) => {
      const { email, password } = req.body;
  
      try {
        const user = await auth.loginUser(email, password);
        const token = generateToken(user);
        res.status(HTTP_STATUS_CODES.SUCCESS).json({ token });
      } catch (error) {
        res.status(HTTP_STATUS_CODES.BAD_REQUEST).json({ message: (error as Error).message });
      }
    }
  }
  
  const authController = new AuthController();
  export default authController;