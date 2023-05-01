const express = require('express')

const { programacion } = require('../datos/cursos.js').infoCursos

const routerProgramacion = express.Router()

// Middleware
routerProgramacion.use(express.json())

routerProgramacion.get('/', (req, res) => {
    res.send(programacion) // otra forma puede ser 'res.json'. Lo cambia automáticamente a JSON
})

routerProgramacion.get('/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje
    const resultado = programacion.filter(curso => curso.lenguaje === lenguaje)

    if (resultado.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`)
        // return res.status(404).end() --> Esto sirve para enviar una respuesta vacía
    }
    
    if (req.query.ordenar === 'vistas') {
        return res.send(resultado.sort((a, b) => a.vistas - b.vistas))
    }
    res.send(resultado)
})

routerProgramacion.post('/', (req, res) => {
    const cursoNuevo = req.body
    programacion.push(cursoNuevo)
    res.send(programacion)
})

routerProgramacion.put('/:id', (req, res) => {
    const cursoActualizado = req.body
    const id = req.params.id

    const indice = programacion.findIndex(curso => curso.id == id)

    if (indice >= 0) {
        programacion[indice] = cursoActualizado
    }
    res.send(programacion)
})

routerProgramacion.patch('/:id', (req, res) => {
    const infoActualizada = req.body
    const id = req.params.id

    const indice = programacion.findIndex(curso => curso.id == id)

    if (indice >= 0) {
        const cursoAModificar = programacion[indice]
        Object.assign(cursoAModificar, infoActualizada)
    }
    res.send(programacion)
})

routerProgramacion.delete('/:id', (req, res) => {
    const id = req.params.id

    const indice = programacion.findIndex(curso => curso.id == id)

    if (indice >= 0) {
        programacion.splice(indice, 1)
    }
    res.send(programacion)
})

module.exports = routerProgramacion