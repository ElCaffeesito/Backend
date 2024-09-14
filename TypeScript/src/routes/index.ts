import {Router} from 'express';
import usersRoutes from './users';
import peluchesControllers from './peluches';
import rolesRoutes from './roles';

const router = Router();

router.use('/users', usersRoutes);
router.use('/usuarios', rolesRoutes);
router.use('/peluches', peluchesControllers);

export default router;