const express = require('express')
const { crear_con_animal, crear_con_banda } = require('../models/direcciones')


const router = express.Router()

router.get('/api/dir_con_animal', (req, res) => {
  const direccion = crear_con_animal()
  
  res.send(`En la interseccion de las calles ${direccion.calle1} y ${direccion.calle2} hay un ${direccion.animal}`)
})

router.get('/api/dir_con_animal', (req, res) => {

  const calle1 = faker.address.streetName()
  const calle2 = faker.address.streetName()

  const animal = faker.animal.type()

  console.log(calle1, calle2, animal);
  res.send(`En la interseccion de las calles ${calle1} y ${calle2} hay un ${animal}`)
})

router.get('/api/dir_con_banda', (req, res) => {


  res.send(`En la interseccion de las calles ${calle1} y ${calle2} hay una banda de ${banda}`)
})

module.exports = router