import { Router } from 'express';
import { addSalesman, getSalesman, deleteSalesman } from '../controllers/salesmanController.js';
import { verifyToken } from '../middleware/auth.js';
const router = Router();

router.post('/', verifyToken, addSalesman);
router.get('/', verifyToken, getSalesman);
router.delete('/:id', verifyToken, deleteSalesman);

export default router;
