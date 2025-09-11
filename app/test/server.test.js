const request = require('supertest');
const { app } = require('../src/server');


describe('server', () => {
    it('responds on / with greeting', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('message');
    });


    it('exposes /health', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toBe(200);
    });
});