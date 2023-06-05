import { Router } from 'express';
import usersController from './users.controller';

const router = Router();

/**
 * @openapi
 * /api/v1/users/create-user:
 *   post:
 *    tags:
 *      - User
 *    summary: Create user
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/CreateUserInput'
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateUserResponse'
 *      409:
 *         description: Conflict
 *      400:
 *         description: Bad request
 */
router.post('/create-user', usersController.createUser);

/**
 * @openapi
 * /api/v1/users/all:
 *  get:
 *    tags:
 *      - User
 *    description: Get all users
 *    responses:
 *      200:
 *        description: Success
 */
router.get('/all', usersController.getUsers);

/**
 * @openapi
 * /api/v1/users/{userId}:
 *   get:
 *     tags:
 *       - User
 *     summary: Get user by id
 *     parameters:
 *     - id: userId
 *       in: path
 *       description: The id of the user
 *       required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  success:
 *                     type: boolean
 *                  data:
 *                     type: object
 *       404:
 *          description: User not found
 */
router.get('/:id', usersController.getUserById);

export default router;
