const http = require('http')
const port = 3000

const servidor = http.createServer((req, res) => {
    res.end('Estoy aprendiendo Node.js y usando Nodemon')
})

servidor.listen(3000, () => {
    console.log('The server is listening...')
})