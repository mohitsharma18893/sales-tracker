import ShopSalesmanMapping from '../models/ShopSalesmanMapping.js';
import codes from '../constants/httpCodes.js';
import checkRole from '../utils/checkRole.js';

export async function addShopSalesmanMapping(req, res) {
  try {
    await checkRole('admin', req.user.role)
    const mappings = req.body.shops.map(shop => ({
      shop: shop,
      salesman: req.body.salesman
    }));
    await ShopSalesmanMapping.insertMany(mappings);
    res.status(codes.CREATED).json("Link Addedd Successfully.");
  } catch (err) {
    throw err;
  }
}

export async function getAllShopSalesmanMapping(req, res) {
  try {
    await checkRole('admin', req.user.role)
    const shopSalesmanMapping = await ShopSalesmanMapping.find();
    res.json(shopSalesmanMapping);
  } catch (err) {
    throw err;
  }
}

export async function getShopSalesmanMapping(req, res) {
  try {
    await checkRole('salesman', req.user.role)
    const shopSalesmanMapping = await ShopSalesmanMapping.find({ salesman: req.params.id });
    res.json(shopSalesmanMapping);
  } catch (err) {
    throw err;
  }
}
