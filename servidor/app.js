const http = require('http')
const port = 3000

const servidor = http.createServer((req, res) => {
  console.log('===> res (respuesta)')
  
  res.setHeader('content-type', 'application/json')
  console.log(res.getHeaders())

  res.end('Prueba')
})

servidor.listen(port, () => {
  console.log(`The server is listening on http://localhost:${port}...`)
})