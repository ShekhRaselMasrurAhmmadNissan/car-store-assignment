import { Request, Response } from 'express';
import generateErrorMessage from '../../generators/errorMessage';
import generateNotFoundMessage from '../../generators/notFoundMessage';
import generateSuccessMessage from '../../generators/successMessage';
import { Car } from '../Car/car.model';
import { CarServices } from '../Car/car.service';
import { Order } from './order.model';
import { OrderServices } from './order.service';

const placeOrder = async (req: Request, res: Response) => {
	try {
		const order = req.body;
		const car = await Car.isCarExists(order?.car);
		if (!car) {
			res.status(404).json(generateNotFoundMessage(`Car not found.`));
		} else {
			let { quantity: carQuantity, inStock } = car;

			if (!inStock || carQuantity < order.quantity) {
				res.status(200).json(
					generateSuccessMessage(`Car not available`, null),
				);
			} else {
				const newQuantity = carQuantity - order.quantity;
				const newInStock = newQuantity > 0;
				const newCarInfo = {
					quantity: newQuantity,
					inStock: newInStock,
				};
				const carUpdate = await CarServices.updateSingleCarFromDB(
					order.car,
					newCarInfo,
				);
				const result = await OrderServices.placeOrderToDB(order);
				res.status(200).json(
					generateSuccessMessage(
						`Order created successfully`,
						result,
					),
				);
			}
		}
	} catch (error: any) {
		res.status(400).json(generateErrorMessage(error));
	}
};

const calculateTotalRevenue = async (req: Request, res: Response) => {
	try {
		const result = await OrderServices.calculateTotalRevenueOfOrder();
		res.status(200).json(
			generateSuccessMessage(
				'Revenue calculated successfully',
				result[0],
			),
		);
	} catch (error: any) {
		res.status(400).json(generateErrorMessage(error));
	}
};

export const OrderController = {
	placeOrder,
	calculateTotalRevenue,
};
