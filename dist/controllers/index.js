"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const express_1 = require("express");
const response_helper_1 = require("../util/response.helper");
const user_controller_1 = __importDefault(require("./controller/user.controller"));
const router = (0, express_1.Router)();
//controllers
router.get("/", (req, res) => {
    return (0, response_helper_1.responseHelper)(res, http_status_1.default.OK, false, "server up and running");
});
//other controllers
router.use("/users", user_controller_1.default);
router.all("*", (req, res) => {
    return (0, response_helper_1.responseHelper)(res, http_status_1.default.NOT_FOUND, true, "requested resource not found");
});
exports.default = router;
