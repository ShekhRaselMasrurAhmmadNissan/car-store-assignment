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
router.put('/:carID', CarController.updateSingleCarData);
router.delete('/:carID', CarController.deleteCarData);

// exporting the Router
export const CarRoutes = router;
