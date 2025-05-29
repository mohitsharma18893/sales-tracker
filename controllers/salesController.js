import Sale from '../models/Sale.js';

export async function addSale(req, res) {
  try {
    if (req.user.role === 'salesman') {
      const sale = new Sale(req.body);
      await sale.save();
      res.status(201).json("Entry Added Successfully.");
    } else {
      const error = new Error('UNAUTHORIZED');
      error.statusCode = 401;
      throw error;
    }
  } catch (err) {
    throw err;
  }
}

export async function getSales(req, res) {
  try {
    if (req.user.role === 'admin') {
      const sales = await Sale.find();
      res.json(sales);
    } else {
      const error = new Error('UNAUTHORIZED');
      error.statusCode = 401;
      throw error;
    }
  } catch (err) {
    throw err;
  }
}
