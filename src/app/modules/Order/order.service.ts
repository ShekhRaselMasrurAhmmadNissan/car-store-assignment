import { IOrder } from './order.interfaces';
import { Order } from './order.model';

/**
 *
 * @param order
 * This function is used to place an order
 */
const placeOrderToDB = async (order: IOrder) => {
	const result = await Order.create(order);
	return result;
};

/**
 *
 * This function is used to calculate total revenue
 */
const calculateTotalRevenueOfOrder = async () => {
	// Aggregate to calculate the sum of all the orders totalPrice field and store it in a new field called totalRevenue to return only
	const result = await Order.aggregate([
		{
			$group: {
				_id: null,
				totalRevenue: {
					$sum: '$totalPrice',
				},
			},
		},
		{
			$project: {
				_id: 0,
				totalRevenue: 1,
			},
		},
	]);

	return result;
};

export const OrderServices = {
	placeOrderToDB,
	calculateTotalRevenueOfOrder,
};
