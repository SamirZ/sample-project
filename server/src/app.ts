import cors, { CorsOptionsDelegate } from 'cors';
import express from 'express';
import hpp from 'hpp';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import mongoSanitize from 'express-mongo-sanitize';
import session, { Store } from 'express-session';
import { ALLOWED_ORIGIN, IN_PROD, SESSION_OPTIONS } from './config';
import { active, catchAsync, notFound, serverError } from './middleware';

import { home, login, register } from './routes';

export const createApp = (store: Store) => {
    const app = express();

    // // Set security HTTP headers
    app.use(helmet());

    app.use(cors({ origin: ALLOWED_ORIGIN, credentials: true }));

    app.use(express.json());

    // Data sanitization
    app.use(mongoSanitize());

    // Limit request from the same IP
    if (IN_PROD) {
        const limiter = rateLimit({
            max: 100,
            windowMs: 60 * 60 * 60 * 1000,
            message:
                'Too many request from this IP please try again in an hour!',
        });
        app.use(limiter);
    }

    // Prevent parameter polution
    app.use(
        hpp({
            whitelist: [],
        })
    );

    app.use(
        session({
            ...SESSION_OPTIONS,
            store,
        })
    );
    // Check if session is active
    app.use(catchAsync(active));

    // Routes
    app.use(home);
    app.use(login);
    app.use(register);

    app.use(notFound);
    app.use(serverError);

    return app;
};
