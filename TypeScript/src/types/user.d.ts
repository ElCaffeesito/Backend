interface UserAdress {
    street: string;
}

export interface Users {
    id?: string;
    name: string;
    email?: string;
    password?: string;
    address?: UserAdress;
    role?: ""
}

declare global {
    namespace Express {
        export interface Request {
            user?: Users
        }
    }
}
