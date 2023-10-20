import { Router } from "express";
import userService from "../../services/user.service";
import validator from "../../validators";
import { validationCheckMiddleWare } from "../../middleware/validation.middleware";
const router = Router();

router.post("/",validator.userValidator, 
                validationCheckMiddleWare,
                userService.createUser);

export default router;
