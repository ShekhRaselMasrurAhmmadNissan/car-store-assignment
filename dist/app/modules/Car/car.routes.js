"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarRoutes = void 0;
const express_1 = __importDefault(require("express"));
const car_controller_1 = require("./car.controller");
// Router
const router = express_1.default.Router();
/**
 * Routes
 */
router.post('/', car_controller_1.CarController.saveCar);
router.get('/', car_controller_1.CarController.getAllCarData);
router.get('/:carID', car_controller_1.CarController.getSingleCarData);
router.put('/:carID', car_controller_1.CarController.updateSingleCarData);
router.delete('/:carID', car_controller_1.CarController.deleteCarData);
// exporting the Router
exports.CarRoutes = router;
