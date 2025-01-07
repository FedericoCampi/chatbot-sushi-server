import { Schema, model } from 'mongoose';

export const MenuItemSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
});

export default model('MenuItem', MenuItemSchema);