import { Model } from 'mongoose';

// Enum for Category
export enum Category {
	Sedan = 'Sedan',
	SUV = 'SUV',
	Truck = 'Truck',
	Coupe = 'Coupe',
	Convertible = 'Convertible',
}

// Interface for Car
export interface ICar {
	brand: string;
	model: string;
	year: number;
	price: number;
	category: Category;
	description: string;
	quantity: number;
	inStock: boolean;
}

export interface ICarModel extends Model<ICar> {
	isCarExists(id: string): Promise<ICar | null>;
}
