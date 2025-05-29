import { Router } from 'express';
import { addShopSalesmanMapping, getShopSalesmanMapping } from '../controllers/shopsSalesmanMappingController.js';
import { verifyToken } from '../middleware/auth.js';
const router = Router();

router.post('/', verifyToken, addShopSalesmanMapping);
router.get('/', verifyToken, getShopSalesmanMapping);

export default router;
