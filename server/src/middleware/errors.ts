import { RequestHandler, Request, Response, NextFunction } from 'express';

export const catchAsync = (handler: RequestHandler) => (
    ...args: [Request, Response, NextFunction]
) => (handler(...args) as any).catch(args[2]);

export const notFound = (req: Request, res: Response, next: NextFunction) =>
    res.status(404).json({ message: 'Not Found' });

export const serverError = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!err.status) {
        console.error(err.stack);
    }

    if (err && err.code === 11000) {
        const value = err.errmsg
            .match(/(["'])(\\?.)*?\1/)[0]
            .replace(/\\/g, '')
            .replace(/"/, '(')
            .replace(/"/, ')');

        const message = `Duplicate field value ${value}. Please use another value!`;
        res.status(400).json({
            message,
        });
    } else {
        res.status(err.status || 500).json({
            message: err.message || 'Internal Server Error',
        });
    }

};
