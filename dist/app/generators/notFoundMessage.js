"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @param message
 * @returns An 404 error message that will match the given format
 */
const generateNotFoundMessage = (message) => {
    return {
        message: message,
        success: false,
        data: null,
    };
};
exports.default = generateNotFoundMessage;
