import Sale from '../models/Sale.js';
import codes from '../constants/httpCodes.js';
import checkRole from '../utils/checkRole.js';

export async function addSale(req, res) {
  try {
    await checkRole('salesman', req.user.role)
    const sale = new Sale(req.body);
    await sale.save();
    res.status(codes.CREATED).json({ message: "Entry Added Successfully." });
  } catch (err) {
    throw err;
  }
}

export async function getSales(req, res) {
  try {
    await checkRole('admin', req.user.role)
    const sales = await Sale.find();
    res.json(sales);
  } catch (err) {
    throw err;
  }
}
