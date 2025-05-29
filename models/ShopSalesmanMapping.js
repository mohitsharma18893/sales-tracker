import { Schema, model, Types } from 'mongoose';

const shopSalesmanMappingSchema = new Schema({
  shop: { type: Types.ObjectId, ref: 'Shop' },
  salesman: { type: Types.ObjectId, ref: 'Salesman' },
  date: { type: Date, default: Date.now }
});

export default model('ShopSalesmanMapping', shopSalesmanMappingSchema);
