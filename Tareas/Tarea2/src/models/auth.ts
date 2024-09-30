import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import User from '../models/user'
import { HTTP_STATUS_CODES } from "../types/http-status-codes"
import { encryptPassword, isPasswordValid, generateToken } from "../controllers/token.controller";

const SALT_ROUNDS = 7;

class Authenticator {


  registerUser = async (firstName: string, email: string, password: string, role: string) => {
    const user = await User.findOne({ email });
    if (user) {
      throw new Error('User already exists');
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("El usuario ya existe");
    }
    
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const newUser = new User({
      firstName: firstName as string,
      lastName: '',
      email: email as string,
      password: hashedPassword,
      role: role,
      status: 'active',
    });

    await newUser.save();
    return newUser;
  }

  loginUser = async (email: string, password: string) => {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('Datos erroneos');
    }

    if (user.status != 'active') {
      throw new Error('La cuenta no esta activa')
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('correo o contraseña erronea');
    }

    return user;
  }
}

const auth = new Authenticator();
export default auth;