/**
 *
 * @param error
 * @returns An error message that will match the given format
 */

const generateErrorMessage = (error: any) => {
	const response = {
		// message: error._message || 'Something Went wrong...',
		message:
			error.name === 'ZodError'
				? 'Validation Error'
				: 'Something Went wrong...',
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
