import request from 'supertest';
import { createApp } from '../../app';

describe('login', () => {
    let store: any;

    beforeAll(() => {
        var Redis = require('ioredis-mock');
        store = new Redis({
            data: {},
        });
    });

    test('It should response the GET method', async () => {
        const response = await request(createApp(store)).get('/me');
        expect(response.status).toEqual(401);
    });
});
