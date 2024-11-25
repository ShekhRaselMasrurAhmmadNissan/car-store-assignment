import { ObjectId } from 'mongoose';

export interface IOrder {
	email: string;
	car: ObjectId;
	quantity: number;
	price: number;
}
