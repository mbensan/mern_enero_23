const mg = require('./db.js')


const Car = mg.model('Car', mg.Schema({
  make: String,
  model: String,
  year: Number,
  addons: [String],
  motor: {
    tipo: String,
    volumen: Number
  }
}, {timestamps: true}))

module.exports = {
  Car
}