import { Router } from "express";
import rolesController from "../controllers/roles.controllers";
import { roleMiddleware } from "../middlewares/role";

const router = Router();

router.get('', roleMiddleware(['admin', 'gerente']), rolesController.listAll);

export default router;