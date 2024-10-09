import { Router } from "express";

const router = Router();

router.get('', (req, res) => {
    res.send([]);
})

router.get('/:id', (req, res) => {
    res.send({
        id: req.params.id
    })
})

export default router;