const mg = require('./db.js')

const Player = mg.model('Player', mg.Schema({
  name: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    minLength: [2, 'El nombre debe ser de largo al menos 2']
  },
  position: String,
  game1: {
    type: String,
    default: 'undefined'
  },
  game2: {
    type: String,
    default: 'undefined'
  },
  game3: {
    type: String,
    default: 'undefined'
  }
}, {timestamps: true}))


const Movie = mg.model('Movie', mg.Schema({
  title: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    minLength: [2, 'El nombre debe ser de largo al menos 2']
  },
  rating: int,
  game1: {
    type: String,
    default: 'undefined'
  },
  game2: {
    type: String,
    default: 'undefined'
  },
  game3: {
    type: String,
    default: 'undefined'
  }
}, {timestamps: true}))

const Review = mg.model('Review', mg.Schema({
  autor: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    minLength: [2, 'El nombre debe ser de largo al menos 2']
  },
  movie: String,
  rating: Number,
  game1: {
    type: String,
    default: 'undefined'
  },
  game2: {
    type: String,
    default: 'undefined'
  },
  game3: {
    type: String,
    default: 'undefined'
  }
}, {timestamps: true}))


module.exports = Player

{
  title: 'Lo que el viento se llevó',
  rating: 5
}

{
  autor: 'Matias Bensan',
  comment: 'Un clásico de todos los tiempos',
  rating: 5,
  movie: 'Lo que el viento se llevó'
}
{
  autor: 'Sara Davila',
  comment: 'Se ven losprejuicios de la época',
  rating: 3,
  movie: 'Lo que el viento se llevó'
}