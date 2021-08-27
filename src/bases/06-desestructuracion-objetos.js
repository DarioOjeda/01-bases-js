
const persona = {
    name: 'Tons',
    age: 25,
    codeName: 'Ironman'
}

// El orden de la desestructuración no importa
const {name, age, codeName, power = 'No tiene poder'} = persona

// console.log( name )
// console.log( age )
// console.log( codeName )
// console.log( power )

// Con dos puntos en la desestructuración renombramos la variable, véase con nombre
const createHero = ( {name: nombre, age, codeName, power = 'No tiene poder'} ) => ({
    id: 21123132,
    nombre,
    age,
    codeName,
    power,
}) 

console.log( createHero( persona ) )