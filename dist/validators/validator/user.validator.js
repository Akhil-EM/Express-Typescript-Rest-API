"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
exports.default = [
    (0, express_validator_1.body)("username")
        .notEmpty()
        .withMessage("username required")
        .isLength({ min: 5 })
        .withMessage("username must be at least 5 characters long"),
    (0, express_validator_1.body)("password")
        .trim()
        .notEmpty()
        .withMessage("password required")
        .isLength({ min: 5 })
        .withMessage("password must be at least 5 characters long"),
];
