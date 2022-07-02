const supertest = require('supertest');
const express = require('express');
const app = require('../src/index');
const req = supertest(app);
describe('testing endpoint',()=>{
    it('get the api endpoint', async()=>{
        const res = await req.get('/api/images');
        expect(res.status).toBe(200);
    })
})

describe('testing not found api',()=>{
    it('error 404', async()=>{
        const res = await req.get('/api/images/kkdkdl');
        expect(res.status).toBe(404);
    })
})