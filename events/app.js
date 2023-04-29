const EventEmitter = require('events')

const emisorProductos = new EventEmitter()

emisorProductos.on('compra', (numProductos, total) => {
    console.log(`Se realizó una compra de ${numProductos} productos, por un total de $${total} USD `)
})

emisorProductos.emit('compra', 10, 350)