const mg = require('./db.js')

const reviewSchema = mg.Schema({
  autor: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    minLength: [2, 'El nombre debe ser de largo al menos 2']
  },
  rating: Number,
})

const movieSchema = mg.Schema({
  title: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    minLength: [2, 'El nombre debe ser de largo al menos 2']
  },
  rating: {
    type: Number,
    required: [true, 'El rating es obligatorio'],
    min: [0, 'No puede tener rating menor a 0'],
    max: [5, 'No puede tener rating mayor a 5']
  },
  description: String,
  reviews: [reviewSchema] // subdocumentos

}, {timestamps: true})

const Movie = mg.model('Movie', movieSchema)

module.exports = Movie

