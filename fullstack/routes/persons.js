const {Router} = require('express')
const Person = require('../models/persons')

const router = Router()

router.get('/', (req, res) => {
  res.json({message: 'Saludos desde el Servidor'}) 
})

// ruta para crear personas
router.post('/people', async (req, res) => {
  // 1. Extraemos los datos que nos pasa el cliente
  const {name, lastName} = req.body
  const person = await Person.create({
    name: name,
    lastName: lastName
  })
  res.json({_id: person._id})
})

router.get('/people', async (req, res) => {
  const people = await Person.find()
  res.json({people: people})
})

router.get('/people/:id', async (req, res) => {
  const id = req.params.id
  const person = await Person.findOne({_id: id})
  res.json(person)
})

router.delete('/people/:id', async (req, res) => {
  const id = req.params.id
  const person = await Person.deleteOne({_id: id})
  res.json({eliminado: 'ok'})
})

router.put('/people/:id', async (req, res) => {
  const id = req.params.id
  const {name, lastName} = req.body

  await Person.findOneAndUpdate(
    {_id: id}, // criterio de búsqueda
    {$set: {name: name, lastName: lastName}}  // fijamos los nuevos valores
  )

  res.json({hola: 'chao'})
})



module.exports = router