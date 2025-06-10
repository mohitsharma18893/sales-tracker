import { Router } from 'express';
import { addSalesman, getAllSalesman, deleteSalesman } from '../controllers/salesmanController.js';
import { verifyToken } from '../middleware/auth.js';
import { validateBodyWithJoi, validateParamWithJoi } from '../middleware/validateWithJoi.js';
import { salesmanSchema, salesmanIdSchema } from '../validators/schema.js';
const router = Router();

router.post('/', verifyToken, validateBodyWithJoi(salesmanSchema),addSalesman);
router.get('/', verifyToken, getAllSalesman);
router.delete('/:id', verifyToken, validateParamWithJoi(salesmanIdSchema), deleteSalesman);

export default router;
