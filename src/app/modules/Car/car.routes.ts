import express from 'express';
import { CarController } from './car.controller';

// Router
const router = express.Router();

/**
 * Routes
 */

router.post('/', CarController.saveCar);
router.get('/', CarController.getAllCarData);
router.get('/:carID', CarController.getSingleCarData);

// exporting the Router
export const CarRoutes = router;
