import mongoose from 'mongoose';
import { z } from 'zod';

const orderValidationSchema = z.object({
	email: z.string().email({ message: 'Invalid email address' }),
	car: z.string().refine((value) => mongoose.Types.ObjectId.isValid(value), {
		message: 'Invalid ObjectId for car',
	}),
	quantity: z.number().min(1, { message: 'Quantity must be at least 1' }),
	totalPrice: z
		.number()
		.min(0, { message: 'Price must be a non-negative number' }),
});

export default orderValidationSchema;
