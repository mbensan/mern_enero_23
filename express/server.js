const express = require('express')

const app = express()

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

let cars = [
  { id: 1, make: 'Honda', model: 'Civic', year: 2022 },
  { id: 2, make: 'Toyota', model: 'Corolla', year: 2021 },
  { id: 3, make: 'Ford', model: 'Mustang', year: 2020 },
  { id: 4, make: 'Chevrolet', model: 'Camaro', year: 2023 },
  { id: 7, make: 'BMW', model: 'X5', year: 2022 }
];


app.get('/', function (request, response) {
  // acá respondemos a la solicitud
  response.send('<h2>Nuesta API está funcionando</h2>')
})

// Ruta para obtener TODOS los autos
app.get('/api/cars', (req, res) => {
  res.json(cars)
})

// Ruta para obtener 1 auto en particular
app.get('/api/cars/:id', (req, res) => {
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
app.post('/api/cars', (req, res) => {
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
app.put('/api/cars/:id', (req, res) => {
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
app.delete('/api/cars/:id', (req, res) => {
  const id = req.params.id
  console.log('cars antes', cars);
  cars = cars.filter(car => car.id != id)
  console.log('cars despues', cars);

  res.send('Auto eliminado')
})

app.listen(8000, function () {
  console.log("Servidor ejecutando en el puerto 8000")
})

