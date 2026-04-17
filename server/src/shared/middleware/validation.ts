import type { Request, Response, NextFunction } from 'express';
import { createError } from './errorHandler.js';

export function validateBody(
  requiredFields: string[]
) {
  return (req: Request, _res: Response, next: NextFunction): void => {
    for (const field of requiredFields) {
      if (req.body[field] === undefined || req.body[field] === null) {
        next(createError(`Missing required field: ${field}`, 400));
        return;
      }
    }
    next();
  };
}
