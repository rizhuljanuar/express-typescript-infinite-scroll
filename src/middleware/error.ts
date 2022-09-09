import { Request, Response, NextFunction } from "express";

export default function handleError(
  err: TypeError,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  return res.status(500).json({
    status: err.name,
    message: err.message,
  });
}
