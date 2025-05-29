import { Schema, model, Types } from 'mongoose';

const saleSchema = new Schema({
  shop: { type: Types.ObjectId, ref: 'Shop' },
  salesman: { type: Types.ObjectId, ref: 'Salesman' },
  item: { type: String, required: true },
  quantity: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

export default model('Sales', saleSchema);
