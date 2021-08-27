
const persona = {
    nombre : 'Mauri',
    apellido: 'Ponse',
    edad: 33,
    direccion: {
        ciudad: 'New York',
        zip: 533223,
        lat: 533223,
        lng: 533223
    }
}

const persona2 = persona

persona2.nombre = 'Tonis'
console.log(persona2)
console.log(persona)
// Los objetos en js son pasados por referencia
// Es decir, persona y persona2 apunta al mismo
// espacio en memoria.
// Esto se rompe con el operador spread
const persona3 = { ...persona }
// Esto rompe la referencia y si cambio el nombre de persona3,
// El de persona quedará intacto
console.log(persona3)
