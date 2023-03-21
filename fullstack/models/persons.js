const mg = require('./db.js')

const Person = mg.model('Person', mg.Schema({
  name: String,
  lastName: String
}, {timestamps: true}))

module.exports = Person