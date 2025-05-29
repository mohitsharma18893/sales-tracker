import { Router } from 'express';
import { addShop, getAllShops, deleteShop } from '../controllers/shopsController.js';
import { verifyToken } from '../middleware/auth.js';
const router = Router();

router.post('/', verifyToken, addShop);
router.get('/', verifyToken, getAllShops);
router.delete('/:id', verifyToken, deleteShop);

export default router;
