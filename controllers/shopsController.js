import Shop from '../models/Shop.js';
import codes from '../constants/httpCodes.js';
import checkRole from '../utils/checkRole.js';

export async function addShop(req, res) {
  try {
    await checkRole('admin', req.user.role)
    const shop = new Shop(req.body);
    await shop.save();
    return res.status(codes.CREATED).json({ message: "Shop Addedd Successfully." });
  } catch (err) {
    throw err;
  }
}

export async function getAllShops(req, res) {
  try {
    await checkRole('admin', req.user.role)
    const result = await Shop.find();
    const shops = result.map(shop => ({
      id: shop._id,
      name: shop.shopName
    }));
    return res.json(shops);
  } catch (err) {
    throw err;
  }
}

export async function deleteShop(req, res) {
  try {
    await checkRole('admin', req.user.role)
    await Shop.deleteOne({ _id: req.params.id });
    return res.status(codes.OK).json({ message: "Shop Deleted Successfully." });
  } catch (err) {
    throw err;
  }
}
