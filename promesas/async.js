const ordenarProducto = (producto) => {
    return new Promise((res, rej) => {
        console.log(`Ordenando: ${producto} de FreeCodeCamp`)
        setTimeout(() => {
            if(producto === 'taza') {
                res('Ordenando una taza de FreeCodeCamp...')
            } else {
                rej('Este producto no está disponible actualmente')
            }
        }, 2000)
    })
}

const procesarPedido = (respuesta) => {
    return new Promise(res => {
        console.log('Procesando respuesta...')
        console.log(`La respuesta fue: "${respuesta}"`)
        setTimeout(() => {
            res('Gracias por tu compra')
        }, 4000)
    })
}

/*ordenarProducto('lapiz')
    .then(respuesta => {
        console.log('Respuesta recibida')
        console.log(respuesta)
        return procesarPedido(respuesta)
    })
    .then(respuestaProcesada => {
        console.log(respuestaProcesada)
    })
    .catch(error => {
        console.log(error)
    })*/

const realizarPedido = async(producto) => {
    try {
        const respuesta = await ordenarProducto(producto)
        console.log('Respuesta recibida')
        const respuestaProcesada = await procesarPedido(respuesta)
        console.log(respuestaProcesada)
    } catch (error) {
        console.log(error)
    }
}

realizarPedido('taza')