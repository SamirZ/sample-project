import { Request, Response } from 'express';
import { SESSION_NAME } from './config';

export const logIn = (req: Request, userId: string) => {
    (req.session as any).userId = userId;
    (req.session as any).createdAt = Date.now();
};

export const logOut = (req: Request, res: Response) =>
    new Promise((resolve, reject) => {
        req.session!.destroy((err: Error) => {
            if (err) reject(err);
            res.clearCookie(SESSION_NAME);

            resolve(true);
        });
    });

export const isLoggedIn = (req: Request) => !!(req.session as any).userId;
