

const arreglo = [1,2,3,4,5]
const arreglo2 = new Array() //Menos común 

arreglo.push(13)

console.log(arreglo)


//De nuevo aqui se pasa el arreglo por referencia
const arreglo3 = arreglo
arreglo3.push( 6 )

console.log('Arreglo 1',arreglo)
console.log('Arreglo 3',arreglo3)

// Así se rompe la referencia
const arreglo4 = [ ...arreglo ]
arreglo4.push(69)

console.log('Arreglo 1',arreglo)
console.log('Arreglo 4',arreglo4)

//El map no coge el mismo espacio en memoria para arreglo5
// Que aquel en el que se encontraba arreglo4
const arreglo5 = arreglo4.map( function( n, i ){
    console.log(i)
    // i es el índice
    return n * 2

    // n es el valor del arreglo anterior
})

console.log('Arreglo 5, el del mapa', arreglo5)