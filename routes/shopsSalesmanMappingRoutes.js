import { Router } from 'express';
import { addShopSalesmanMapping, getAllShopSalesmanMapping } from '../controllers/shopsSalesmanMappingController.js';
import { verifyToken } from '../middleware/auth.js';
const router = Router();

router.post('/', verifyToken, addShopSalesmanMapping);
router.get('/', verifyToken, getAllShopSalesmanMapping);

export default router;
