import ShopSalesmanMapping from '../models/ShopSalesmanMapping.js';

export async function addShopSalesmanMapping(req, res) {
  try {
    if (req.user.role === 'admin') {
      const mappings = req.body.shops.map(shop => ({
        shop: shop,
        salesman: req.body.salesman
      }));
      await ShopSalesmanMapping.insertMany(mappings);
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

export async function getAllShopSalesmanMapping(req, res) {
  try {
    if (req.user.role === 'admin') {
      const shopSalesmanMapping = await ShopSalesmanMapping.find();
      res.json(shopSalesmanMapping);
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
    if (req.user.role === 'salesman') {
      const shopSalesmanMapping = await ShopSalesmanMapping.find({salesman: req.params.id});
      res.json(shopSalesmanMapping);
    } else {
      const error = new Error('UNAUTHORIZED');
      error.statusCode = 401;
      throw error;
    }
  } catch (err) {
    throw err;
  }
}
