import crypto from 'crypto';
import jwt from 'jsonwebtoken';

// Generar token de acceso basado en el JWT Secret
export const generateToken = (userId: string, role: string) => {
  return jwt.sign({ id: userId, role }, process.env.JWT_SECRET || '', { expiresIn: '1h' });
};

// Encriptar usando el JWT secret como clave
export const encryptPassword = (password: string): string => {
  const secret = process.env.JWT_SECRET || '';
  const hash = crypto.createHmac('sha256', secret).update(password).digest('hex');
  return hash;
};

// Comparar contraseñas encriptadas
export const isPasswordValid = (inputPassword: string, storedPasswordHash: string): boolean => {
  const secret = process.env.JWT_SECRET || '';
  const inputHash = crypto.createHmac('sha256', secret).update(inputPassword).digest('hex');
  return inputHash === storedPasswordHash;
};
