const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const { infoCursos } = require('./datos/cursos.js')

// Routers
const routerMatematicas = require('./routers/matematicas.js')
app.use('/api/cursos/matematicas', routerMatematicas)

const routerProgramacion = require('./routers/programacion.js')
app.use('/api/cursos/programacion', routerProgramacion)

// Routing
app.get('/', (req, res) => {
    res.send('Mi primer servidor con express. Cursos.')
})

app.get('/api/cursos', (req, res) => {
    res.send(infoCursos)
})

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}...`)
})