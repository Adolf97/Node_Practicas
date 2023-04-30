const http = require('http')
const cursos = require('./cursos')
// Otra forma para acceder a los cursos sería:
// const {infoCursos} = require('./cursos)
const { json } = require('stream/consumers')
const port = 3000

const servidor = http.createServer((req, res) => {
    const {method} = req

    switch(method) {
        case 'GET':
            return manejarSolicitudGET(req, res)
        case 'POST':
            return manejarSolicitudPOST(req, res)
        default:
            res.statusCode = 501
            res.end(`El método usado no puede ser manejado por el servidor: ${method}`)
            // Se puede incluir también BREAK
    }
})

const manejarSolicitudGET = (req, res) => {
    const path = req.url

    console.log(res.statusCode) // Va a ser 200 - Ok, por defecto

    if(path === '/') {
        // res.writeHead(200, {'Content-Type': 'application/json'}) --> Sirve para el manejo de cabeceras
        return res.end('Bienvenidos a mi primer servidor y API creados con NodeJS')
    } else if (path === '/cursos') { // Una alternativa es que podemos empezar la ruta con /api/...
        return res.end(JSON.stringify(cursos.infoCursos))
    } else if (path === '/cursos/programacion') {
        return res.end(JSON.stringify(cursos.infoCursos.programacion))
    } else if (path === '/cursos/matematicas') {
        return res.end(JSON.stringify(cursos.infoCursos.matematicas))
    }
    res.statusCode = 404
    res.end('No se encontró el recurso que buscas :(')
}

const manejarSolicitudPOST = (req, res) => {
    const path = req.url

    if(path === '/cursos/programacion') {
        let cuerpo = ''

        req.on('data', contenido => {
            cuerpo += contenido.toString()
        })

        req.on('end', () => {
            console.log(cuerpo)
            console.log(typeof cuerpo)

            // Convertir a un objeto de JS
            cuerpo = JSON.parse(cuerpo)
            console.log(typeof cuerpo)
            console.log(cuerpo.titulo)

            res.end('El servidor recibió una solicitud POST para /cursos/programacion')
        })

        // return res.end('El servidor recibió una solicitud POST para /cursos/programacion')
    }
}

servidor.listen(port, () => {
    console.log(`The server is listening on http://localhost:${port}`)
})