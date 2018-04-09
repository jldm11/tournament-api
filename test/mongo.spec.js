const should = require('should')
const { db, mockgoose } = require('../db/mongo')
const Test = require('./mocks/models/test')

describe('mongo', () => {
  before(function (done) {
    this.timeout(120000)
    db.on('connected', () => {
      mockgoose.helper.reset().then(() => {
        done()
      })
    })
  })

  describe('test model', function () {
    it('should save a document', function (done) {
      Test
        .create({text: 'some text', digit: 9})
        .then((document) => {
          should(document.text).be.exactly('some text')
          should(document.digit).be.exactly(9)
          done()
        })
    })

    it('should find the created document', function (done) {
      Test
        .find()
        .then(documents => {
          should(documents.length).be.exactly(1)
          should(documents[0].digit).be.exactly(9)
          done()
        })
    }).timeout(50000)
  })
})
