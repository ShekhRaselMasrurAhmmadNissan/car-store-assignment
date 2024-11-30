"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @param message
 * @param data
 * @returns An success message that will match the given format
 */
const generateSuccessMessage = (message, data) => {
    const response = {
        message,
        success: true,
        data,
    };
    return response;
};
exports.default = generateSuccessMessage;
