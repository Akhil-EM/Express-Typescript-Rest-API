import  { body } from "express-validator";

export default [
    body("username").notEmpty().withMessage("username required")
                    .isLength({ min: 5 }).withMessage("username must be at least 5 characters long"),
    body("password").trim().notEmpty().withMessage("password required")
                    .isLength({ min: 5 }).withMessage("password must be at least 5 characters long"),
];