import { Request, Response } from 'express';
import orderValidationSchema from './orders.validation';
import { orderServices } from './orders.service';

const createOrders = async (req: Request, res: Response) => {
  try {
    const { order } = req.body;
    const validatedOrders = orderValidationSchema.parse(order);

    const result = await orderServices.createOrdersIntoDB(validatedOrders);
    res.status(200).json({
      success: true,
      message: 'Orders created successfully',
      data: result,
    });
    // eslint-disable-next-line
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'Orders creation failed',
      error,
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await orderServices.getAllOrdersFromDB();

    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully',
      data: result,
    });
    // eslint-disable-next-line
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'Orders failed to fetch',
      error,
    });
  }
};

const getOrderByEmail = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    if (typeof email !== 'string') throw new Error('Invalid email provided');
    const result = await orderServices.getOrderByEmailFromDB(email);

    res.status(200).json({
      success: true,
      message: 'Order fetched successfully',
      data: result,
    });
    // eslint-disable-next-line
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'Order failed to fetch',
      error,
    });
  }
};

const ordersController = {
  createOrders,
  getAllOrders,
  getOrderByEmail,
};

export default ordersController;
