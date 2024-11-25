import { z } from 'zod';
import { Category } from './car.interfaces';

const carValidationSchema = z.object({
	brand: z.string().nonempty('Brand is required'),
	model: z.string().nonempty('Model is required'),
	year: z.number().int().positive('Year must be a positive integer'),
	price: z.number().positive('Price must be a positive number'),
	category: z.nativeEnum(Category),
	description: z.string().nonempty('Description is required'),
	quantity: z.number().int().positive('Quantity must be a positive number'),
	inStock: z.boolean().optional().default(true),
});

export default carValidationSchema;
