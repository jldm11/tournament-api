'use strict'

const SwaggerExpress = require('swagger-express-mw')
const app = require('express')()
require('./db/mongo')

const swaggerConfig = {
  appRoot: __dirname // required config
}

SwaggerExpress.create(swaggerConfig, function (err, swaggerExpress) {
  if (err) { throw err }

  swaggerExpress.register(app)
  var port = process.env.PORT || 10010
  app.listen(port)
})

module.exports = app // for testing
