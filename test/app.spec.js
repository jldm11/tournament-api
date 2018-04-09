const should = require('should')
const config = require('config')

describe('app', function () {
  describe('config', function () {
    it('should be using test configurations', function () {
      should(config.get('env')).be.exactly('test')
    })
  })
})
