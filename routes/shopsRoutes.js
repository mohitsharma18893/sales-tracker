import { Router } from 'express';
import { addShop, getAllShops, deleteShop } from '../controllers/shopsController.js';
import { verifyToken } from '../middleware/auth.js';
import { validateBodyWithJoi, validateParamWithJoi } from '../middleware/validateWithJoi.js';
import { shopSchema, shopIdSchema } from '../validators/schema.js';
const router = Router();

router.post('/', verifyToken, validateBodyWithJoi(shopSchema), addShop);
router.get('/', verifyToken, getAllShops);
router.delete('/:id', verifyToken, validateParamWithJoi(shopIdSchema), deleteShop);

export default router;
