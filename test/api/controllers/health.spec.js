var should = require('should')
var request = require('supertest')
var server = require('../../../app')

describe('controllers', function () {
  describe('health', function () {
    describe('GET /', function () {
      it('should return Tournament-API service status', function (done) {
        request(server)
          .get('/v1')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function (err, res) {
            should.not.exist(err)

            res.body.should.eql({status: 'Tournament-API service is running'})

            done()
          })
      })
    })
  })
})
