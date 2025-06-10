import { Router } from 'express';
import { addSale, getSales } from '../controllers/salesController.js';
import { verifyToken } from '../middleware/auth.js';
import { validateBodyWithJoi } from '../middleware/validateWithJoi.js';
import { saleSchema } from '../validators/schema.js';
const router = Router();

router.post('/', verifyToken, validateBodyWithJoi(saleSchema), addSale);
router.get('/', verifyToken,getSales);

export default router;
