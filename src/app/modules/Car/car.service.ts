import { ICar } from './car.interfaces';
import { Car } from './car.model';

const savingCarToDB = async (car: ICar) => {
	const result = await Car.create(car);
	return result;
};

export const CarServices = {
	savingCarToDB,
};
