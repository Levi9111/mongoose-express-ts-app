import express, { Request, Response } from 'express';
import ordersController from './orders.controller';

const router = express.Router();

router.post('/', ordersController.createOrders);

router.get('/', (req: Request, res: Response) => {
  const email = req.query.email;
  if (typeof email === 'string' && email.trim() !== '') {
    return ordersController.getOrderByEmail(req, res);
  } else {
    return ordersController.getAllOrders(req, res);
  }
});

export const OrderRoutes = router;
