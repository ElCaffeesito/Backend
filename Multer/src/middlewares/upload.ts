import { Request } from "express";
import multer, { diskStorage, FileFilterCallback } from "multer";

const storage = diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        const ext = file.originalname.split('.').pop();
        const timestamp = new Date().getTime();
        cb(null, `${timestamp.toString()}.${ext}`);
    }
});

const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    const flag = file.mimetype.startsWith('image/');
    cb(null, flag);
}


const upload = multer({ storage });

export default upload;
