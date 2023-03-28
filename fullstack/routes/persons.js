const {Router} = require('express')
const Person = require('../models/persons')

const router = Router()

router.get('/', (req, res) => {
  res.json({message: 'Saludos desde el Servidor'}) 
})

// ruta para crear personas
router.post('/people', async (req, res) => {
  // 1. Extraemos los datos que nos pasa el cliente
  const {name, lastName, age} = req.body
  try {
    const person = await Person.create({
      name: name,
      lastName: lastName,
      age: age
    })
    // respuesta en caso de que todo esté bien
    return res.json({_id: person._id})
  }
  catch(error) {
    console.log(error)
    // respuesta en caso de un error de validación
    return res.json(error, 400)
  }

  
})

// ruta para obtener todas las personas
router.get('/people', async (req, res) => {
  const people = await Person.find()
  res.json({people: people})
})

// ruta para obtener el detalle de una persona
router.get('/people/:id', async (req, res) => {
  const id = req.params.id
  const person = await Person.findOne({_id: id})
  res.json(person)
})

// ruta para borrar personas
router.delete('/people/:id', async (req, res) => {
  const id = req.params.id
  const person = await Person.deleteOne({_id: id})
  res.json({eliminado: 'ok'})
})

// ruta para actualizar una persona
router.put('/people/:id', async (req, res) => {
  const id = req.params.id
  const {name, lastName, age} = req.body

  try {
    await Person.findOneAndUpdate(
      {_id: id}, // criterio de búsqueda
      {$set: {name: name, lastName: lastName, age: age}}  // fijamos los nuevos valores
    )
    return res.json({hola: 'chao'})
  }
  catch(error) {
    return res.json(error, 400)
  }

})



module.exports = router