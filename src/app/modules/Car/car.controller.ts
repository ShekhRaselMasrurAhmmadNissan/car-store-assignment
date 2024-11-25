import { query, Request, Response } from 'express';
import generateErrorMessage from '../../generators/errorMessage';
import generateSuccessMessage from '../../generators/successMessage';
import { CarServices } from './car.service';

const saveCar = async (req: Request, res: Response) => {
	try {
		const result = await CarServices.savingCarToDB(req.body);
		const message: string = `Car added successfully.`;
		res.status(200).json(generateSuccessMessage(message, result));
	} catch (error: any) {
		res.status(400).json(generateErrorMessage(error));
	}
};

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
		res.status(200).json({
			success: true,
			message: `Your Message`,
			data: result,
		});
	} catch (error: any) {
		res.status(400).json({
			success: false,
			message: error.message || 'Something Went wrong',
			error,
		});
	}
};

export const CarController = {
	saveCar,
	getAllCarData,
};
