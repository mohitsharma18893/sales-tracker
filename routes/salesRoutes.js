import { Router } from 'express';
import { addSale, getSales } from '../controllers/salesController.js';
import { verifyToken } from '../middleware/auth.js';
const router = Router();

router.post('/', verifyToken, addSale);
router.get('/', verifyToken,getSales);

export default router;
