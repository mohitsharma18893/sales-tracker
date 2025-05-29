import { Router } from 'express';
import { addShop, getShops } from '../controllers/shopsController.js';
import { verifyToken } from '../middleware/auth.js';
const router = Router();

router.post('/', verifyToken, addShop);
router.get('/', verifyToken, getShops);

export default router;
