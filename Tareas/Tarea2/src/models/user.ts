import { Schema, model, SchemaTypes } from 'mongoose';

const userSchema = new Schema({
    firstName: { type: SchemaTypes.String, required: true },
    lastName: { type: SchemaTypes.String, required: true },
    email: { type: SchemaTypes.String, required: true, unique: true },
    password: { type: SchemaTypes.String, required: true },
    role: { type: SchemaTypes.String, default: 'user' },
    status: { type: SchemaTypes.String },
})

const user = model('user', userSchema);
export default user;


/*
Registro

Se debe crear el flujo para dar de alta un usuario (nombre, correo, rol, contraseña, status) - ya
Se debe validar que el usuario no se encuentre repetido - no
Se debe almacenar el usuario en la base de datos - no
La contraseña NO se debe almacenar en texto plano - no

*/