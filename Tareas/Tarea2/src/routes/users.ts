import { Router } from "express";
import usersController from '../controllers/user.controller'
import authController from '../controllers/auth.controller'

const router = Router();

router.get('', usersController.getAll);

router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);

export default router;