// const saludo = require("./saludo.js")

const { saludar, saludarHolaMundo } = require("./saludo.js")
// Se usa esta forma de desestructuración cuando tenemos muchas funciones en un módulo exportador
// pero no queremos usar todas en un módulo importador.

console.log(saludar("Adolfo"))
console.log(saludarHolaMundo())