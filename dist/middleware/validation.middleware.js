"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationCheckMiddleWare = void 0;
const http_status_1 = __importDefault(require("http-status"));
const response_helper_1 = require("../util/response.helper");
const express_validator_1 = require("express-validator");
function validationCheckMiddleWare(req, res, next) {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        const errorArray = errors.array();
        const errorMap = {};
        errorArray.forEach((error) => {
            const { path, value, msg } = error;
            if (!errorMap[path]) {
                errorMap[path] = {
                    value: value || null,
                    errors: [msg],
                };
            }
            else {
                errorMap[path].errors.push(msg);
            }
        });
        return (0, response_helper_1.responseHelper)(res, http_status_1.default.UNPROCESSABLE_ENTITY, true, "Validation errors", errorMap);
    }
    else {
        next();
    }
}
exports.validationCheckMiddleWare = validationCheckMiddleWare;
