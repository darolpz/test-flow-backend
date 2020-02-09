const request = require('supertest');
const server = require('../src/index');

test('Get location endpoint', async () => {
    const res = await request(server.app)
        .get('/v1/location');
    expect(res.statusCode).toEqual(200);
});

test('Get weather endpoint without any city', async () => {
    const res = await request(server.app)
        .get('/v1/current');
    expect(res.statusCode).toEqual(200);
});

test('Get forecast endpoint without any city', async () => {
    const res = await request(server.app)
        .get('/v1/forecast');
    expect(res.statusCode).toEqual(200);
});

test('Get weather endpoint with param Quilmes', async () => {
    const res = await request(server.app)
        .get('/v1/current/quilmes');
    expect(res.statusCode).toEqual(200);
});

test('Get forecast endpoint with param Quilmes', async () => {
    const res = await request(server.app)
        .get('/v1/forecast/quilmes');
    expect(res.statusCode).toEqual(200);
});

test('Get forecast endpoint with param Lanus (example of mispelled city)', async () => {
    const res = await request(server.app)
        .get('/v1/forecast/lanus');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual(400);
});
