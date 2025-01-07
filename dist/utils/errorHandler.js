"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorMessage = void 0;
const getErrorMessage = (error) => {
    if (error instanceof Error) {
        return error.message;
    }
    return 'Unknown error occurred';
};
exports.getErrorMessage = getErrorMessage;
