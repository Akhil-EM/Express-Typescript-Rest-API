"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const http_status_1 = __importDefault(require("http-status"));
const response_helper_1 = require("../util/response.helper");
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //database codes
            return (0, response_helper_1.responseHelper)(res, http_status_1.default.OK, false, "new user created successfully");
        }
        catch (error) {
            return (0, response_helper_1.responseHelper)(res, http_status_1.default.INTERNAL_SERVER_ERROR, true, error.message);
        }
    });
}
module.exports = {
    createUser,
};
