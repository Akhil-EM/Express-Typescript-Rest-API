import httpStatus from "http-status";
import { responseHelper } from "../util/response.helper";
import { Request, Response } from "express";
/**
 * create user in database.
 * @param {Request}req 
 * @param {Response} res 
 * @returns {Object} 
 */
async function createUser(req: Request, res: Response) {
  try {
    //database codes

    return responseHelper(
      res,
      httpStatus.OK,
      false,
      "new user created successfully",
    );
  } catch (error) {
    return responseHelper(
      res,
      httpStatus.INTERNAL_SERVER_ERROR,
      true,
      (error as Error).message,
    );
  }
}

export = {
  createUser,
};
