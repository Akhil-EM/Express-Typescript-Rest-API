import { Response } from "express";
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
