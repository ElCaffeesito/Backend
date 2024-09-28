import { Router } from "express";
import usersController from '../controllers/user.controller'
import {createUser, loginUser} from '../controllers/auth.controller'

const router = Router();

router.get('', usersController.getAll);

router.post('/register', createUser);
router.post('/login', loginUser);

export default router;