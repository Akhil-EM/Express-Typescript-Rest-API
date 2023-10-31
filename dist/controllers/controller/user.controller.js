"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_service_1 = __importDefault(require("../../services/user.service"));
const validators_1 = __importDefault(require("../../validators"));
const validation_middleware_1 = require("../../middleware/validation.middleware");
const router = (0, express_1.Router)();
router.post("/", validators_1.default.userValidator, validation_middleware_1.validationCheckMiddleWare, user_service_1.default.createUser);
exports.default = router;
