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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderServices = void 0;
const order_model_1 = require("./order.model");
const placeOrderToDB = (order) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.create(order);
    return result;
});
const calculateTotalRevenueOfOrder = () => __awaiter(void 0, void 0, void 0, function* () {
    // Aggregate to calculate the sum of all the orders totalPrice field and store it in a new field called totalRevenue to return only
    const result = yield order_model_1.Order.aggregate([
        {
            $group: {
                _id: null,
                totalRevenue: {
                    $sum: '$totalPrice',
                },
            },
        },
        {
            $project: {
                _id: 0,
                totalRevenue: 1,
            },
        },
    ]);
    return result;
});
exports.OrderServices = {
    placeOrderToDB,
    calculateTotalRevenueOfOrder,
};
