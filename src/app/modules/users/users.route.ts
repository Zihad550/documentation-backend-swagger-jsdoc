import { Router } from 'express';
import usersController from './users.controller';

const router = Router();

/**
 * @openapi
 * /api/v1/users/create-user:
 *   post:
 *    tags:
 *      - User
 *   summary: Create user
 *   requestBody:
 *     required: true
 *     contents:
 *       application/json
 *
 */
router.post('/create-user', usersController.createUser);

/**
 * @openapi
 * /api/v1/users/all:
 *  get:
 *    tag:
 *      - users
 *    description: Get all users
 *    responses:
 *      200:
 *        description: {success: true, data: users}
 */
router.get('/all', usersController.getUsers);
router.get('/:id', usersController.getUserById);

export default router;
