import { Response } from "express";
/**
 * format response.
 * @param {Response} res 
 * @param {Number} status 
 * @param {Boolean} isError 
 * @param {String} message 
 * @param {Object|Null} data 
 * @returns {Object}
 */
export function responseHelper(
  res: Response,
  status: number,
  isError: boolean,
  message: string,
  data: object = {},
): Response {
  return res.status(status).json({
    status,
    isError,
    message,
    data,
  });
}
