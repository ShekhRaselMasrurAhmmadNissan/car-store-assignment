import { Request, Response } from 'express';
import { ZodError } from 'zod';
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

export const CarController = {
	saveCar,
};
