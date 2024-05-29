import { TOrder } from './orders.interface';
import Order from './orders.model';

const createOrdersIntoDB = async (orderData: TOrder) => {
  const result = await Order.create(orderData);
  return result;
};

const getAllOrdersFromDB = async () => {
  return await Order.find();
};

const getOrderByEmailFromDB = async (email: string) => {
  return await Order.findOne({ email });
};

export const orderServices = {
  createOrdersIntoDB,
  getAllOrdersFromDB,
  getOrderByEmailFromDB,
};
