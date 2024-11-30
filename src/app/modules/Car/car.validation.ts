import { z } from 'zod';
import { Category } from './car.interfaces';

// * validation of saving the car
const saveCarValidationSchema = z.object({
	brand: z.string().nonempty('Brand is required'),
	model: z.string().nonempty('Model is required'),
	year: z.number().int().positive('Year must be a positive integer'),
	price: z.number().positive('Price must be a positive number'),
	category: z.nativeEnum(Category),
	description: z.string().nonempty('Description is required'),
	quantity: z.number().int().min(0, 'Quantity cannot be less than 0'),
	inStock: z.boolean().optional().default(true),
});

// * Validation of updating the car
const updateCarValidationSchema = z.object({
	brand: z.string().nonempty('Brand is required').optional(),
	model: z.string().nonempty('Model is required').optional(),
	year: z
		.number()
		.int()
		.positive('Year must be a positive integer')
		.optional(),
	price: z.number().positive('Price must be a positive number').optional(),
	category: z.nativeEnum(Category).optional(),
	description: z.string().nonempty('Description is required').optional(),
	quantity: z
		.number()
		.int()
		.min(0, 'Quantity cannot be less than 0')
		.optional(),
	inStock: z.boolean().optional().default(true),
});

const CarValidationSchema = {
	saveCarValidationSchema,
	updateCarValidationSchema,
};

export default CarValidationSchema;
