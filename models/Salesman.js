import { Schema, model } from 'mongoose';

const salesmanSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  contact: { type: String, required: true },
  role: { type: String, default: 'salesman' },
  username: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

export default model('Salesman', salesmanSchema);
