"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateNotFoundMessage = (message) => {
    return {
        message: message,
        success: false,
        data: null,
    };
};
exports.default = generateNotFoundMessage;
