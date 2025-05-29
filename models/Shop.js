import { Schema, model, Types } from 'mongoose';

const shopSchema = new Schema({
  shopName: { type: String, required: true },
  shopAddress: { type: String, required: true },
  shopContact: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

export default model('Shops', shopSchema);
