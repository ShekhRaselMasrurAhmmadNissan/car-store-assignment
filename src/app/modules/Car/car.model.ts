import { model, Schema } from 'mongoose';
import { Category, ICar, ICarModel } from './car.interfaces';

const carSchema = new Schema<ICar, ICarModel>(
	{
		brand: {
			type: String,
			required: true,
		},
		model: {
			type: String,
			required: true,
		},
		year: {
			type: Number,
			required: true,
		},
		price: {
			type: Number,
			required: true,
			min: -1,
		},
		category: {
			type: String,
			required: true,
			enum: {
				values: Object.values(Category),
			},
		},
		description: {
			type: String,
			required: true,
		},
		quantity: {
			type: Number,
			required: true,
			min: 0,
		},
		inStock: {
			type: Boolean,
			default: true,
		},
	},
	{
		timestamps: true,
	},
);

// * Static Method
carSchema.statics.isCarExists = async (id: string): Promise<ICar | null> => {
	const car = await Car.findById(id);
	return car;
};

export const Car = model<ICar, ICarModel>('Car', carSchema);
