import { Request, Response } from 'express';
import generateErrorMessage from '../../generators/errorMessage';
import generateNotFoundMessage from '../../generators/notFoundMessage';
import generateSuccessMessage from '../../generators/successMessage';
import { Car } from './car.model';
import { CarServices } from './car.service';
import CarValidationSchema from './car.validation';

// * Saving a Car in the Database
const saveCar = async (req: Request, res: Response) => {
	try {
		const zodParseData = CarValidationSchema.saveCarValidationSchema.parse(
			req.body,
		);

		if (zodParseData.quantity === 0) {
			zodParseData.inStock = false;
		}

		const result = await CarServices.savingCarToDB(zodParseData);
		const message: string = `Car created successfully`;
		res.status(200).json(generateSuccessMessage(message, result));
	} catch (error: any) {
		res.status(400).json(generateErrorMessage(error));
	}
};

// * Get all data from the database
const getAllCarData = async (req: Request, res: Response) => {
	const query = req.query;

	// Making the query case insensitive
	const finalQuery: any = {};
	for (const key in query) {
		finalQuery[key] = { $regex: query[key], $options: 'i' };
	}
	console.log(finalQuery);

	try {
		const result = await CarServices.getAllCarDataFromDB(finalQuery);
		res.status(200).json(
			generateSuccessMessage(`Cars retrieved successfully`, result),
		);
	} catch (error: any) {
		res.status(400).json(generateErrorMessage(error));
	}
};

// * Get single data from the database
const getSingleCarData = async (req: Request, res: Response) => {
	try {
		const { carID } = req.params;
		const result = await CarServices.getSingleCarFromDB(carID);
		if (result == null) {
			res.status(404).json(generateNotFoundMessage(`Car not found`));
		} else {
			res.status(200).json(
				generateSuccessMessage(`Car retrieved successfully`, result),
			);
		}
	} catch (error: any) {
		res.status(400).json(generateErrorMessage(error));
	}
};

// * Update single car data
const updateSingleCarData = async (req: Request, res: Response) => {
	try {
		const carID = req.params.carID;
		const data = req.body;

		const zodParseData =
			CarValidationSchema.updateCarValidationSchema.parse(data);

		if (!(await Car.isCarExists(carID))) {
			res.status(404).json(generateNotFoundMessage(`Car not found`));
		} else {
			const result = await CarServices.updateSingleCarFromDB(
				carID,
				zodParseData,
			);
			res.status(200).json(
				generateSuccessMessage(`Car updated successfully`, result),
			);
		}
	} catch (error: any) {
		res.status(400).json(generateErrorMessage(error));
	}
};

const deleteCarData = async (req: Request, res: Response) => {
	try {
		const carID = req.params.carID;
		if (!(await Car.isCarExists(carID))) {
			res.status(404).json(generateNotFoundMessage(`Car not found`));
		} else {
			let result: any = await CarServices.deleteCarFromDB(carID);
			if (result) {
				result = {};
			}
			res.status(200).json(
				generateSuccessMessage('Car deleted successfully', result),
			);
		}
	} catch (error: any) {
		res.status(400).json(generateErrorMessage(error));
	}
};

export const CarController = {
	saveCar,
	getAllCarData,
	getSingleCarData,
	updateSingleCarData,
	deleteCarData,
};
