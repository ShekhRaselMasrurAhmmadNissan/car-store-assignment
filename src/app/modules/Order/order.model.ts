import mongoose, { model, Schema } from 'mongoose';

const OrderSchema = new Schema(
	{
		email: {
			type: String,
			required: true,
		},
		car: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
		},
		quantity: {
			type: Number,
			required: true,
			min: 1,
		},
		totalPrice: {
			type: Number,
			required: true,
			min: 0,
		},
	},
	{
		timestamps: true,
	},
);

export const Order = model('Order', OrderSchema);
