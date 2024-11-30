"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateSuccessMessage = (message, data) => {
    const response = {
        message,
        success: true,
        data,
    };
    return response;
};
exports.default = generateSuccessMessage;
