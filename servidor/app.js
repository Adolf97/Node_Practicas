const http = require('http')

const servidor = http.createServer((req, res) => {
  res.end('Hola Mundo!')
})