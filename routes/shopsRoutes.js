import { Router } from 'express';
import { addShop, getAllShops, deleteShop } from '../controllers/shopsController.js';
import { verifyToken } from '../middleware/auth.js';
import { validateWithJoi } from '../middleware/validateWithJoi.js';
import { shopSchema } from '../validators/schema.js';
const router = Router();

router.post('/', verifyToken, validateWithJoi(shopSchema), addShop);
router.get('/', verifyToken, getAllShops);
router.delete('/:id', verifyToken, deleteShop);

export default router;
