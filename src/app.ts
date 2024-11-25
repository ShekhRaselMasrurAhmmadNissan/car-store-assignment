import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { CarRoutes } from './app/modules/Car/car.routes';
import { OrderRoutes } from './app/modules/Order/order.routes';

const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors());

// Paths
app.use('/api/cars', CarRoutes);
app.use('/api/orders', OrderRoutes);

// Testing
app.get('/', async (req: Request, res: Response) => {
	res.send(`Hello World!`);
});

export default app;
