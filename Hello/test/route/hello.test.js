import { app } from '../../src/express.js' 
import { expect } from 'chai';
import supertest from 'supertest';

const request = supertest(app);

describe('Express Hello Routes', () => {
  it('should return "Hello World" for GET /hello', async () => {
    const res = await request.get('/hello');
    expect(res.status).to.equal(200);
    expect(res.text).to.contain('Hello World');
  });

  it('should return JSON for GET /api/hello', async () => {
    const res = await request.get('/api/hello');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('message', 'Hello World');
    expect(res.body).to.have.property('date');
  });

  it('should return 500 for GET /500', async () => {
    const res = await request.get('/500');
    expect(res.status).to.equal(500);
    expect(res.body).to.have.property('status', 500);
  });

  it('should return 404 for non-existent route', async () => {
    const res = await request.get('/not-found');
    expect(res.status).to.equal(404);
    expect(res.body).to.have.property('status', 404);
  });
});
