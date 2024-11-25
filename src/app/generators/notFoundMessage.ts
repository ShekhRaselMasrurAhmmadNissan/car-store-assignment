const generateNotFoundMessage = (message: string) => {
	return {
		message: message,
		success: false,
		data: null,
	};
};
export default generateNotFoundMessage;
