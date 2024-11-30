"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateErrorMessage = (error) => {
    const response = {
        // message: error._message || 'Something Went wrong...',
        message: error.name === 'ZodError'
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
exports.default = generateErrorMessage;
