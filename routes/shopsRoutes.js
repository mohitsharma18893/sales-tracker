import { Router } from 'express';
import { addShop, getShops, deleteShop } from '../controllers/shopsController.js';
import { verifyToken } from '../middleware/auth.js';
const router = Router();

router.post('/', verifyToken, addShop);
router.get('/', verifyToken, getShops);
router.delete('/:id', verifyToken, deleteShop);

export default router;
