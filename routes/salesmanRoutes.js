import { Router } from 'express';
import { addSalesman, getAllSalesman, deleteSalesman } from '../controllers/salesmanController.js';
import { verifyToken } from '../middleware/auth.js';
import { validateWithJoi } from '../middleware/validateWithJoi.js';
import { salesmanSchema } from '../validators/schema.js';
const router = Router();

router.post('/', verifyToken, validateWithJoi(salesmanSchema),addSalesman);
router.get('/', verifyToken, getAllSalesman);
router.delete('/:id', verifyToken, deleteSalesman);

export default router;
