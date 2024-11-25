const generateErrorMessage = (error: any) => {
	const response = {
		message: error._message || 'Something Went wrong...',
		success: false,
		error: {
			name: error.name,
			errors: error.errors || null,
		},
		stack: error.stack || null,
	};
	return response;
};

export default generateErrorMessage;
