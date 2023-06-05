import { Router } from 'express';
import catsController from './cats.controller';

const router = Router();

router.post('/create-cat', catsController.createCat);
router.get('/all', catsController.getAllCat);
router.get('/owner/:id', catsController.getCatsByOwnerId);
router.get('/:id', catsController.getCatById);

export default router;
