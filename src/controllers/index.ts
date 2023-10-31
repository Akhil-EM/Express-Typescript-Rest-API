import httpStatus from "http-status";
import { Router, Request, Response } from "express";
import { responseHelper } from "../util/response.helper";
import userController from "./controller/user.controller";

const router = Router();
//controllers
router.get("/", (req: Request, res: Response) => {
  return responseHelper(res, httpStatus.OK, false, "server up and running");
});

//other controllers
router.use("/users", userController);

router.all("*", (req: Request, res: Response) => {
  return responseHelper(
    res,
    httpStatus.NOT_FOUND,
    true,
    "requested resource not found",
  );
});

export default router;
