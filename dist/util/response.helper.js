"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseHelper = void 0;
function responseHelper(res, status, isError, message, data = {}) {
    return res.status(status).json({
        status,
        isError,
        message,
        data,
    });
}
exports.responseHelper = responseHelper;
