// importamos las librerías necesarias
const express = require('express')
const cors = require('cors')
const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')
const AdminJSMongoose = require('@adminjs/mongoose')
const Movie = require('./models/movies')

const app = express()

// para leer datos de formulario
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// para comunicarse con otros host's
app.use(cors())

// cargamos las rutas
app.use('/api', require('./routes/players.js'))

// configurar el AdminJS
AdminJS.registerAdapter(AdminJSMongoose)

const adminJS = new AdminJS({
  resources: [Movie],
  rootPath: '/admin'
})
const adminRouter = AdminJSExpress.buildRouter(adminJS)
app.use(adminJS.options.rootPath, adminRouter)

// cuando se inicia el servidor
app.listen(8000, () => console.log("Ejecutando en el puerto 8000"))
