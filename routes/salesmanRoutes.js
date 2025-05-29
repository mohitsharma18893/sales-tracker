import { Router } from 'express';
import { addSalesman, getSalesman } from '../controllers/salesmanController.js';
import { verifyToken } from '../middleware/auth.js';
const router = Router();

router.post('/', verifyToken, addSalesman);
router.get('/', verifyToken, getSalesman);

export default router;
