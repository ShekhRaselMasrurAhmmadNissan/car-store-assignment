"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const errorMessage_1 = __importDefault(require("../../generators/errorMessage"));
const notFoundMessage_1 = __importDefault(require("../../generators/notFoundMessage"));
const successMessage_1 = __importDefault(require("../../generators/successMessage"));
const car_model_1 = require("../Car/car.model");
const car_service_1 = require("../Car/car.service");
const order_service_1 = require("./order.service");
const order_validation_1 = __importDefault(require("./order.validation"));
const placeOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = req.body;
        const car = yield car_model_1.Car.isCarExists(order === null || order === void 0 ? void 0 : order.car);
        if (!car) {
            res.status(404).json((0, notFoundMessage_1.default)(`Car not found.`));
        }
        else {
            let { quantity: carQuantity, inStock } = car;
            if (!inStock || carQuantity < order.quantity) {
                res.status(200).json((0, successMessage_1.default)(`Car not available`, null));
            }
            else {
                const newQuantity = carQuantity - order.quantity;
                const newInStock = newQuantity > 0;
                const newCarInfo = {
                    quantity: newQuantity,
                    inStock: newInStock,
                };
                yield car_service_1.CarServices.updateSingleCarFromDB(order.car, newCarInfo);
                const zodParseData = order_validation_1.default.parse(order);
                const result = yield order_service_1.OrderServices.placeOrderToDB(zodParseData);
                res.status(200).json((0, successMessage_1.default)(`Order created successfully`, result));
            }
        }
    }
    catch (error) {
        res.status(400).json((0, errorMessage_1.default)(error));
    }
});
const calculateTotalRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.OrderServices.calculateTotalRevenueOfOrder();
        res.status(200).json((0, successMessage_1.default)('Revenue calculated successfully', result[0]));
    }
    catch (error) {
        res.status(400).json((0, errorMessage_1.default)(error));
    }
});
exports.OrderController = {
    placeOrder,
    calculateTotalRevenue,
};
