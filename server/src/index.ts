import session from 'express-session';
import connectRedis from 'connect-redis';
import Redis from 'ioredis';
import {
    MONGO_OPTIONS,
    MONGO_URI,
    REDIS_OPTIONS,
    IN_PROD
} from './config';
import mongoose from 'mongoose';
import { createApp } from './app';

(async () => {
    try {
        await mongoose.connect(MONGO_URI, MONGO_OPTIONS);
        
        const RedisStore = connectRedis(session);
        const client = new Redis(REDIS_OPTIONS);
    
        const store = new RedisStore({ client });
    
        const app = createApp(store);
    
        app.listen(4000, () => console.log('App started on port 4000'));
    } catch (error) {
        console.log(MONGO_URI);
        if (!IN_PROD) {
            console.error(error);
        }
        console.error('Please check the configuration files and make sure mongodb and redis are acessible');
    }
})();
