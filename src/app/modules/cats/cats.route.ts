import { Router } from 'express';
import catsController from './cats.controller';

const router = Router();

/**
 * @openapi
 * /api/v1/cats/create-cat:
 *   post:
 *    tags:
 *      - Cat
 *    summary: Create cat
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/CreateCatInput'
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateCatResponse'
 *      409:
 *         description: Conflict
 *      400:
 *         description: Bad request
 */
router.post('/create-cat', catsController.createCat);
router.get('/all', catsController.getAllCat);
router.get('/owner/:id', catsController.getCatsByOwnerId);
router.get('/:id', catsController.getCatById);

export default router;
