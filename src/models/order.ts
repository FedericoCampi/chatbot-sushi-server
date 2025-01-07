import { Schema, model } from 'mongoose';

export const OrderSchema = new Schema({
  items: [{ type: Schema.Types.ObjectId, ref: 'MenuItem' }],
  total: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default model('Order', OrderSchema);