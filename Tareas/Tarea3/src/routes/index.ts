import { Router } from 'express'
import upload from '../middlewares/upload';
import fs from 'fs';
import { getItem } from '../middlewares/download';

const router = Router();

router.get('', (req, res) => {
    res.send('api works!');
})

router.post('/upload', upload.single('docs'), (req, res) => {
    console.log('Archivo: ', req.file);
    if (req.file) {
        res.send(req.file);
    } else {
        res.status(400).send('Archivo no soportado')
    }
})

router.post('/uploads', upload.array('docs'), (req, res) => {
    console.log('Archivo: ', req.files);
    if (req.files && req.files.length) {
        res.send(200).json({ Nombre: req.files});
    } else {
        res.status(400).send('Error al subir los archivos')
    }
})

router.get('/download', getItem, (req, res) => {
    console.log('Archivo: ', req.body.filename)
    if (req.file) {
        res.send(req.file);
    } else {
        res.status(400).send('Archivo no soportado')
    }
})

export default router;