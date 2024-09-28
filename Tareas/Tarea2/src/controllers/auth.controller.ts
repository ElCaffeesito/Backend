import { Request, Response } from "express";
import User from '../models/user'
import { HTTP_STATUS_CODES } from "../types/http-status-codes"
import { encryptPassword, isPasswordValid, generateToken } from "./token.controller";

// Registro
export const createUser = async (req: Request, res: Response) => {
    const { firstName, lastName, email, password, role } = req.query;

    if (!firstName || !lastName || !email || !password) {
        return res.status(HTTP_STATUS_CODES.NOT_FOUND).send("Faltan datos requeridos en la URL");
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(HTTP_STATUS_CODES.BAD_REQUEST).send("El usuario ya existe");
        }

        const hashedPassword = encryptPassword(password as string);

        // Crear el nuevo usuario
        const newUser = new User({
            firstName: firstName as string,
            lastName: lastName as string,
            email: email as string,
            password: hashedPassword,
            role: role, 
            status: 'active', 
        });

        await newUser.save();

        res.status(HTTP_STATUS_CODES.SUCCESS).send("Usuario creado exitosamente");
    } catch (error) {
        res.status(HTTP_STATUS_CODES.SERVER_ERROR).send("Error del servidor");
    }
}

// Login
export const loginUser = async (req: Request, res: Response) => {

    const { email, password } = req.query;

    if (!email || !password) {
        return res.status(400).send('Faltan parámetros requeridos en la URL');
    }

    try {
        const user = await User.findOne({ email, status: 'active' });
        if (!user) {
            return res.status(400).send('Credenciales inválidas');
        }

        const isValid = isPasswordValid(password as string, user.password);
        if (!isValid) {
            return res.status(400).send('Credenciales inválidas');
        }

        const token = generateToken(user.email, user.role);

        res.status(200).send(token);
    } catch (error) {
        res.status(500).send(`Error del servidor: ${error}`);
    }
}