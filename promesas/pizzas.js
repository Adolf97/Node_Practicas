const estatusPedido = () => {
    return Math.random() < 0.8
}

const miPedidoDePizza = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(estatusPedido()) {
            resolve('Pedido exitoso, tu pizza está en camino')
        } else {
            reject('Tu pedido no se pudo procesar')
        }
    }, 1000)
})

/*const manejarPedido = (mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion)
}

const rechazarPedido = (mensajeDeRechazo) => {
    console.log(mensajeDeRechazo)
}

miPedidoDePizza.then(manejarPedido, rechazarPedido)*/

miPedidoDePizza
    .then((mensajeDeConfirmacion) => {
        console.log(mensajeDeConfirmacion)
    })
    .catch((mensajeDeRechazo) => {
        console.log(mensajeDeRechazo)
    })