var mongoose = require('mongoose')
var Schema = mongoose.Schema

var testSchema = new Schema({
  text: { type: String },
  digit: { type: Number }
})

module.exports = mongoose.model('Test', testSchema)
