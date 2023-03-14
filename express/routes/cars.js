const express = require('express')

const router = express.Router()

let cars = require('../models/cars')

// Ruta para obtener TODOS los autos
router.get('/api/cars', (req, res) => {
  res.json(cars)
})

// Ruta para obtener 1 auto en particular
router.get('/api/cars/:id', (req, res) => {
  const id = req.params.id
  let chosenCar;
  for (let car of cars) {
    if (car.id == id) {
      chosenCar = car
    }
  }
  if (chosenCar) {
    return res.json(chosenCar)
  }

  res.json({}, 404)
})

// Ruta para agregar autos
router.post('/api/cars', (req, res) => {
  const last_car = cars[cars.length - 1]
  const last_id = last_car.id
  const new_id = last_id + 1

  const new_car = {
    ...req.body,
    id: new_id
  }

  cars.push(new_car)
  console.log(req.body)
  res.send('Auto creado')
})

// Ruta para modificar un auto
router.put('/api/cars/:id', (req, res) => {
  res.send(`Modificando el auto de ID ${req.params.id}`)
  const new_car = {
    ...req.body,
    id: req.params.id
  }

  cars = cars.filter(car => car.id != req.params.id)
  cars.push(new_car)

  return res.send('Auto editado')
})

// Ruta para eliminar autos
router.delete('/api/cars/:id', (req, res) => {
  const id = req.params.id
  console.log('cars antes', cars);
  cars = cars.filter(car => car.id != id)
  console.log('cars despues', cars);

  res.send('Auto eliminado')
})

module.exports = router