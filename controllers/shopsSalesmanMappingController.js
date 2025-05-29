import ShopSalesmanMapping from '../models/ShopSalesmanMapping.js';

export async function addShopSalesmanMapping(req, res) {
  try {
    if (req.user.role === 'admin') {
      const shopSalesmanMapping = new ShopSalesmanMapping(req.body);
      await shopSalesmanMapping.save();
      res.status(201).json("Link Addedd Successfully.");
    } else {
      const error = new Error('UNAUTHORIZED');
      error.statusCode = 401;
      throw error;
    }
  } catch (err) {
    throw err;
  }
}

export async function getShopSalesmanMapping(req, res) {
  try {
    if (req.user.role === 'admin') {
      const shops = await ShopSalesmanMapping.find();
      res.json(shops);
    } else {
      const error = new Error('UNAUTHORIZED');
      error.statusCode = 401;
      throw error;
    }
  } catch (err) {
    throw err;
  }
}
