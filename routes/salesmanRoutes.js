import { Router } from 'express';
import { addSalesman, getAllSalesman, deleteSalesman } from '../controllers/salesmanController.js';
import { verifyToken } from '../middleware/auth.js';
const router = Router();

router.post('/', verifyToken, addSalesman);
router.get('/', verifyToken, getAllSalesman);
router.delete('/:id', verifyToken, deleteSalesman);

export default router;
