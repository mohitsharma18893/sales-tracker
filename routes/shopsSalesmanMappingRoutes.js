import { Router } from 'express';
import { addShopSalesmanMapping, getAllShopSalesmanMapping, getShopSalesmanMapping } from '../controllers/shopsSalesmanMappingController.js';
import { verifyToken } from '../middleware/auth.js';
const router = Router();

router.post('/', verifyToken, addShopSalesmanMapping);
router.get('/', verifyToken, getAllShopSalesmanMapping);
router.get('/:id', verifyToken, getShopSalesmanMapping);

export default router;
