import { Router } from "express";
import usersController from './../controllers/user.controller'

const router = Router();

router.get('', usersController.getAll);

export default router;