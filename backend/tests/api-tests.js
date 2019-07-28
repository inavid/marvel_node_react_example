'use strict'

const test = require('ava')
const request = require('supertest')

const server = require('../server')

test.serial.cb('/api/x-men', t => {
  request(server)
    .get('/api/x-men')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.falsy(err, 'Should not return an error')
      t.end()
    })
})