/**
 *
 * @param message
 * @returns An 404 error message that will match the given format
 */
const generateNotFoundMessage = (message: string) => {
	return {
		message: message,
		success: false,
		data: null,
	};
};
export default generateNotFoundMessage;
