/**
 *
 * @param message
 * @param data
 * @returns An success message that will match the given format
 */
const generateSuccessMessage = (message: string, data: any) => {
	const response = {
		message,
		success: true,
		data,
	};
	return response;
};

export default generateSuccessMessage;
