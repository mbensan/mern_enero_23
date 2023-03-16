const mg = require('./db.js')


const Car = mg.model('Car', mg.Schema({
  make: String,
  model: String,
  year: Number
}, {timestamps: true}))

module.exports = {
  Car
}