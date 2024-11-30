"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const car_interfaces_1 = require("./car.interfaces");
// * validation of saving the car
const saveCarValidationSchema = zod_1.z.object({
    brand: zod_1.z.string().nonempty('Brand is required'),
    model: zod_1.z.string().nonempty('Model is required'),
    year: zod_1.z.number().int().positive('Year must be a positive integer'),
    price: zod_1.z.number().positive('Price must be a positive number'),
    category: zod_1.z.nativeEnum(car_interfaces_1.Category),
    description: zod_1.z.string().nonempty('Description is required'),
    quantity: zod_1.z.number().int().min(0, 'Quantity cannot be less than 0'),
    inStock: zod_1.z.boolean().optional().default(true),
});
// * Validation of updating the car
const updateCarValidationSchema = zod_1.z.object({
    brand: zod_1.z.string().nonempty('Brand is required').optional(),
    model: zod_1.z.string().nonempty('Model is required').optional(),
    year: zod_1.z
        .number()
        .int()
        .positive('Year must be a positive integer')
        .optional(),
    price: zod_1.z.number().positive('Price must be a positive number').optional(),
    category: zod_1.z.nativeEnum(car_interfaces_1.Category).optional(),
    description: zod_1.z.string().nonempty('Description is required').optional(),
    quantity: zod_1.z
        .number()
        .int()
        .min(0, 'Quantity cannot be less than 0')
        .optional(),
    inStock: zod_1.z.boolean().optional().default(true),
});
const CarValidationSchema = {
    saveCarValidationSchema,
    updateCarValidationSchema,
};
exports.default = CarValidationSchema;
