const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const { infoCursos } = require('./cursos.js')

// Routing
app.get('/', (req, res) => {
    res.send('Mi primer servidor con express. Cursos.')
})
// RUTA --> CURSOS DE PROGRAMACIÓN
app.get('/api/cursos/programacion', (req, res) => {
    res.send(infoCursos.programacion)
})

app.get('/api/cursos/programacion/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje
    const resultado = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje)
    if(resultado.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`)
    }
    
    if(req.query.ordenar === 'vistas') {
        return res.send(JSON.stringify(resultado.sort((a, b) => b.vistas - a.vistas)))
    }
    res.send(JSON.stringify(resultado))
})
// RUTA --> CURSOS DE MATEMÁTICAS
app.get('/api/cursos/matematicas', (req, res) => {
    res.send(infoCursos.matematicas)
})

app.get('/api/cursos/matematicas/:tema', (req, res) => {
    const tema = req.params.tema
    const resultado = infoCursos.matematicas.filter(curso => curso.tema === tema)
    if(resultado.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${tema}`)
    }
    res.send(JSON.stringify(resultado))
})

app.get('/api/cursos', (req, res) => {
    res.send(infoCursos)
})

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}...`)
})