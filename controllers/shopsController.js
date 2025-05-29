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

export async function getAllShops(req, res) {
  try {
    if (req.user.role === 'admin') {
      const result = await Shop.find();
      const shops = result.map(shop => ({
        id: shop._id,
        name: shop.shopName
      }));
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
