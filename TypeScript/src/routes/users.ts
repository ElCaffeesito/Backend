import { Router } from "express";
import UsersController from "../controllers/user.controllers";
import { authMiddleware } from "../middlewares/auth";

const router = Router();

router.get('', authMiddleware, UsersController.findAll);

export default router;