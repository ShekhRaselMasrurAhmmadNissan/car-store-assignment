import { ObjectId } from 'mongoose';

export interface IOrder {
	email: string;
	car: ObjectId | string;
	quantity: number;
	totalPrice: number;
}
