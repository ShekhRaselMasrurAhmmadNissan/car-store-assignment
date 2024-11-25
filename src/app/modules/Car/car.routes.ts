import express from 'express';
import { CarController } from './car.controller';

// Router
const router = express.Router();

/**
 * Routes
 */

router.post('/', CarController.saveCar);

// exporting the Router
export const CarRoutes = router;
