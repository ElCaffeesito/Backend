import { Request, Response } from "express";
import fs from "fs";
import path from "path";

export const getItem = (req: Request, res: Response) => {

    try {
        let pdfName = req.query.file as string;

        let pdfPath = path.join(__dirname, '..', '..', 'Documents', pdfName)
        fs.existsSync(pdfPath) ? res.download(pdfPath) : res.status(404).send('File not found');

    } catch {
        res.status(404).send('Don\'t forget to add the filename!');
    }
}

