import Shop from '../models/Shop.js';

export async function addShop(req, res) {
  try {
    if (req.user.role === 'admin') {
      const shop = new Shop(req.body);
      await shop.save();
      res.status(201).json("Shop Addedd Successfully.");
    } else {
      const error = new Error('UNAUTHORIZED');
      error.statusCode = 401;
      throw error;
    }
  } catch (err) {
    throw err;
  }
}

export async function getShops(req, res) {
  try {
    if (req.user.role === 'admin') {
      const shops = await Shop.find();
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

export async function deleteShop(req, res) {
  try {
    if (req.user.role === 'admin') {
      await Shop.deleteOne({ _id: req.params.id });
      res.status(200).json("Shop Deleted Successfully.");
    } else {
      const error = new Error('UNAUTHORIZED');
      error.statusCode = 401;
      throw error;
    }
  } catch (err) {
    throw err;
  }
}
