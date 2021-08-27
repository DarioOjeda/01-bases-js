

function saludar( nombre ) {
    return `Hola ${nombre}`
}

// saludar = true
// Error porque le cambias el valor de la funcion a un booleano

// Por eso muchas veces se declararn la funciones como se 
// indica a continuacion:

// const saludar = function( nombre ) {
//     return `Hola ${nombre}`
// }

// saludar = true
//Error porque cambio valor a una constante

// Con funcion de flecha y argumento por defecto:
const saludarFlecha = ( nombre = 'Expósito' ) => `Hola ${nombre}`


const nombre = 'Toni nais'

console.log( saludar(nombre))
console.log( saludarFlecha(nombre))

const getUser = () => {
    return {
        uid: 'ABC1232',
        username: 'Tony001'
    }
}
// Tb se puede escribir simplificado:
const getUserContraido = () => ({uid: 'ASDASD', username: 'pakito'})

console.log( getUser() )


const heroes = [{
    id: 1,
    name: 'Batman'
},{
    id: 2,
    name: 'Superman'
}]

// El some() devuelve un booleano con true si encuentra coincidencia
// Según la callback introducida
console.log(heroes.some((element) => element.id === 1))

// El find() devuelve el objeto entero si encuentra coincidencia
const heroe  = heroes.find( (heroe) => heroe.id === 1)

console.log(heroe.name)