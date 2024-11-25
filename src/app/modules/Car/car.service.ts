import { ICar } from './car.interfaces';
import { Car } from './car.model';

/**
 * @param car --> Data that should be saved to the DB
 */
const savingCarToDB = async (car: ICar) => {
	const result = await Car.create(car);
	return result;
};

/**
 * @param terms --> Terms to run the search query. If not provided then this will find all the data from the database
 */
const getAllCarDataFromDB = async (terms: {} | null) => {
	const result = await Car.find(terms || {});
	return result;
};

/**
 * @param id --> This will search the data with the matching ID
 */
const getSingleCarFromDB = async (id: string) => {
	const result = await Car.findById(id);
	return result;
};

/**
 * @param id --> This will search the data with the matching ID
 * @param data --> This is the data that is to be updated
 */
const updateSingleCarFromDB = async (id: string, data: Partial<ICar>) => {
	const result = await Car.findByIdAndUpdate(id, data, { new: true });
	return result;
};

/**
 * @param id --> This is ID of the data that is to be deleted.
 */
const deleteCarFromDB = async (id: string) => {
	const result = await Car.findByIdAndDelete(id);
	console.log(result);
	return result;
};
export const CarServices = {
	savingCarToDB,
	getAllCarDataFromDB,
	getSingleCarFromDB,
	updateSingleCarFromDB,
	deleteCarFromDB,
};
