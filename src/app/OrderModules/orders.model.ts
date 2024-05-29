import { Schema, model } from 'mongoose';
import { TOrder } from './orders.interface';

const orderSchema: Schema<TOrder> = new Schema({
  productId: {
    type: String,
    required: [true, 'Product Id is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/.+@.+\..+/, 'Please enter a valid email address'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

const Order = model<TOrder>('Order', orderSchema);

export default Order;
