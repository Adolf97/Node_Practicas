const express = require('express')

const { programacion } = require('../datos/cursos.js').infoCursos

const routerProgramacion = express.Router()

routerProgramacion.get('/', (req, res) => {
    res.send(JSON.stringify(programacion))
})

routerProgramacion.get('/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje
    const resultado = programacion.filter(curso => curso.lenguaje === lenguaje)

    if(resultado.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`)
    }
    
    if(req.query.ordenar === 'vistas') {
        return res.send(JSON.stringify(resultado.sort((a, b) => a.vistas - b.vistas)))
    }
    res.send(JSON.stringify(resultado))
})

module.exports = routerProgramacion