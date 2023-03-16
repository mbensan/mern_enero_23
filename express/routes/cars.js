const express = require('express')

const router = express.Router()

let {Car} = require('../models/cars')

// Ruta para obtener TODOS los autos
router.get('/api/cars', async (req, res) => {
  const cars = await Car.find()
  res.json(cars)
})

// Ruta para obtener 1 auto en particular
router.get('/api/cars/:id', async (req, res) => {
  // obtengo el ID desde el parámetro de la ruta
  const id = req.params.id
  try {
    const car = await Car.findOne({_id: id})
    return res.json(car)
  }
  catch (error) {
    console.log(error)
    return res.json({error}, 404)
  }
})

// Ruta para agregar autos
router.post('/api/cars', async (req, res) => {
  
  const new_car = await Car.create({
    ...req.body
  })

  res.json(new_car)
})

// Ruta para modificar un auto
router.put('/api/cars/:id', async (req, res) => {

  // recuperamos el ID de los parámetros de las ruta
  const id = req.params.id

  const car = await Car.updateOne(
    {_id: id},
    { ...req.body }
  )

  return res.json({})
})

// Ruta para eliminar autos
router.delete('/api/cars/:id', async (req, res) => {
  const id = req.params.id
  
  await Car.findOneAndRemove({_id: id})
  res.json({})
})

module.exports = router