import { Router } from 'express';
import { addShopSalesmanMapping, getAllShopSalesmanMapping, getShopSalesmanMapping } from '../controllers/shopsSalesmanMappingController.js';
import { verifyToken } from '../middleware/auth.js';
import { validateBodyWithJoi, validateParamWithJoi } from '../middleware/validateWithJoi.js';
import { shopSalesmanMapping, salesmanIdSchema } from '../validators/schema.js';
const router = Router();

router.post('/', verifyToken, validateBodyWithJoi(shopSalesmanMapping), addShopSalesmanMapping);
router.get('/', verifyToken, getAllShopSalesmanMapping);
router.get('/:id', verifyToken, validateParamWithJoi(salesmanIdSchema), getShopSalesmanMapping);

export default router;
