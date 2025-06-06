import Sale from '../models/Sale.js';
import codes from '../constants/httpCodes.js';
import checkRole from '../utils/checkRole.js';
import logger from '../utils/logger.js';

export async function addSale(req, res) {
  try {
    await checkRole('salesman', req.user.role)
    const sale = new Sale(req.body);
    await sale.save();
    return res.status(codes.CREATED).json({ message: "Entry Added Successfully." });
  } catch (err) {
    logger.error(err.message);
    throw err;
  }
}

export async function getSales(req, res) {
  try {
    await checkRole('admin', req.user.role)
    const sales = await Sale.find();
    return res.json(sales);
  } catch (err) {
    logger.error(err.message);
    throw err;
  }
}
