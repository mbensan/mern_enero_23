const express = require('express')

const app = express()

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// traemos las rutas que vamos a utilizar
const car_router = require('./routes/cars')
const direcciones_router = require('./routes/direcciones')

app.use(car_router)
app.use(direcciones_router)

app.get('/', function (request, response) {
  // acá respondemos a la solicitud
  response.send('<h2>Nuesta API está funcionando</h2>')
})


app.listen(8000, function () {
  console.log("Servidor ejecutando en el puerto 8000")
})

