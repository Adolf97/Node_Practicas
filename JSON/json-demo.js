const infoCurso = {
    "titulo": "Aprende Node.js",
    "numVistas": 45642,
    "numLikes": 21123,
    "temas": [
      "Javascript",
      "NodeJS"
    ],
    "esPublico": true
  }

// Con el JSON.stringify() -> Pasamos un objeto a una cadena de caracteres
const infoCursoJson = JSON.stringify(infoCurso)

console.log(infoCursoJson)
console.log(typeof infoCursoJson)

console.log(infoCursoJson.titulo)

// Con el JSON.parse() -> Pasamos una cadena de caracteres a un objeto
const infoCursoObjeto = JSON.parse(infoCursoJson)

console.log(infoCursoObjeto)
console.log(typeof infoCursoObjeto)

console.log(infoCursoObjeto.titulo)