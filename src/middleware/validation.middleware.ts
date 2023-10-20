import httpStatus from "http-status";
import { responseHelper } from "../util/response.helper";
import { Response, Request, NextFunction } from "express";
import { validationResult } from "express-validator";

function validationCheckMiddleWare(req: Request, res: Response, next: NextFunction) {
    const errors: any = validationResult(req);

    if (!errors.isEmpty()) {
        const errorArray = errors.array();
        const errorMap: any = {};
        errorArray.forEach((error: any) => {
            const { path, value, msg } = error;

            if (!errorMap[path]) {
                errorMap[path] = {
                    value: value || null,
                    errors: [msg],
                };
            } else {
                errorMap[path].errors.push(msg);
            }
        });
        return responseHelper(res, httpStatus.UNPROCESSABLE_ENTITY, true, "Validation errors", errorMap);
    } else {
        next();
    }
}

export { validationCheckMiddleWare };
