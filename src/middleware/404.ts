import { Request, Response, NextFunction } from "express";

export default function notFound(
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  return res.status(404).json({
    status: "notFound",
    message: "Resource not found",
  });
}
