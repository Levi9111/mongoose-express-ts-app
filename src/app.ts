import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './app/modules/product.route';
import { OrderRoutes } from './app/OrderModules/orders.route';

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrderRoutes);

app.get('/', function (req: Request, res: Response) {
  res.send('Hello World');
});

export default app;
