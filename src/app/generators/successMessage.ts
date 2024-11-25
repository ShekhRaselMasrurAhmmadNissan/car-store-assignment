const generateSuccessMessage = (message: string, data: any) => {
	const response = {
		message,
		success: true,
		data,
	};
	return response;
};

export default generateSuccessMessage;
