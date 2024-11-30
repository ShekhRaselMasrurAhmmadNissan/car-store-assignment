"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const zod_1 = require("zod");
// * Order Validation Schema
const orderValidationSchema = zod_1.z.object({
    email: zod_1.z.string().email({ message: 'Invalid email address' }),
    car: zod_1.z.string().refine((value) => mongoose_1.default.Types.ObjectId.isValid(value), {
        message: 'Invalid ObjectId for car',
    }),
    quantity: zod_1.z.number().min(1, { message: 'Quantity must be at least 1' }),
    totalPrice: zod_1.z
        .number()
        .min(0, { message: 'Price must be a non-negative number' }),
});
exports.default = orderValidationSchema;
