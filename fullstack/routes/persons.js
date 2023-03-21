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



module.exports = router