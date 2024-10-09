import { Router } from 'express';
import userRoutes from './users'

const router = Router();

/**
* @swagger
* /:
*  get:
*   description: api home endpoint
*   responses:
*    200:
*     description: api successful message
*/
router.get('', (req, res) => {
    res.send('api works!');
})

/**
* @swagger
* /users:
*  post:
*   tags: [Users]
*   description: los usuarios hacen cosas de usuarios
*   responses:
*    200:
*     description: tas siendo EL usuario que hace cosas de usuarios
*/
router.use('/users', userRoutes)

export default router;