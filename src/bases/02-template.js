const nombre = 'Perico'
const apellido = 'Palotes'


const nombreCompleto = `${ nombre } ${ apellido }`
console.log(nombreCompleto)


console.log(`Resultado: ${ 1 + 3}`)

function getSaludo( nombre ) {
    return 'Hola ' + nombre

}

console.log(`Este es un texto: ${ getSaludo(nombre) }`)
