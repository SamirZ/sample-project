import request from 'supertest';
import { createApp } from '../../app';

describe('home', () => {
    let store: any;

    beforeAll(() => {
        var Redis = require('ioredis-mock');
        store = new Redis({
            data: {},
        });
    });

    test('It should response the GET method', async () => {
        const response = await request(createApp(store)).get('/');
        expect(response.status).toEqual(200);
    });
});
