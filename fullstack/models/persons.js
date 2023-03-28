const mg = require('./db.js')

const Person = mg.model('Person', mg.Schema({
  name: {
    type: String,
    required: [true, 'El nombre es obligatorio']
  },
  lastName: {
    type: String,
    required: [true, 'El apellido  es obligatorio']
  },
  age: {
    type: Number,
    required: [true, 'La edad es obligatoria'],
    min: [0, 'No puede tener menos de 0 años de edad'],
    max: [120, 'Está muy viejita la persona']
  }
}, {timestamps: true}))


const Producto = mg.model('Product', mg.Schema({
  title: String,
  description: String,
  price: Number
}, {timestamps: true}))

module.exports = Person