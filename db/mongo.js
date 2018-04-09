const _ = require('lodash')
const config = require('config')
const mongoose = require('mongoose')

const dbUser = _.get(config, 'db.mongo.user')
const dbPassword = _.get(config, 'db.mongo.password')
const dbHost = _.get(config, 'db.mongo.host')
const dbPort = _.get(config, 'db.mongo.port')
const dbName = _.get(config, 'db.mongo.name')
const uri = 'mongodb://' +
  (dbUser ? `${dbUser}:${dbPassword}@` : '') +
  `${dbHost}:${dbPort}/${dbName}`

if (process.env.NODE_ENV === 'test') {
  const Mockgoose = require('mockgoose').Mockgoose
  const mockgoose = new Mockgoose(mongoose)
  mockgoose
    .prepareStorage()
    .then(() => {
      mongoose.connect(uri)
    })

  const db = mongoose.connection
  module.exports = {
    db,
    mockgoose
  }
} else {
  mongoose.connect(uri)

  const db = mongoose.connection

  db.on('error', console.error.bind(console, 'connection error:'))

  db.once('open', () => {
    console.log('Mongo db connection alive')
  })

  module.exports = db
}
