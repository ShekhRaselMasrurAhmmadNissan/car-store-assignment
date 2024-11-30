import express from 'express';
import { OrderController } from './order.controller';

const router = express.Router();

/**
 * Routes
 */
router.post('/', OrderController.placeOrder);
router.get('/revenue', OrderController.calculateTotalRevenue);

export const OrderRoutes = router;
