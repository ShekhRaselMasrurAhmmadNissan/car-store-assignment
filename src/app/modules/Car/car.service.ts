import { ICar } from './car.interfaces';
import { Car } from './car.model';

/**
 * @param car --> Data that should be saved to the DB
 */
const savingCarToDB = async (car: ICar) => {
	const result = await Car.create(car);
	return result;
};

const getAllCarDataFromDB = async (terms: {} | null) => {
	console.log(terms);
	const result = await Car.find(terms || {});
	return result;
};

export const CarServices = {
	savingCarToDB,
	getAllCarDataFromDB,
};
