import { getHeroById } from './bases/08-imp-exp'

// console.log('Inicio')


// new Promise( (resolve, reject) => {

//     console.log('Cuerpo de la promesa')
//     // reject('Promesa resuelta con error')
//     resolve('Promesa resuelta', true)
// })
// .then( console.log )
// .catch( console.log)
// En js cuando tenemos un callback cuyo primer argumento quiero mandar
// Al 1er argumento de otra funcion, en este caso el console log, puedo simplificarlo
// Como se aprecia arriba


// El promesa resuelta no se muestra
// antes del Fin, esto es porque las promesas resuletas se añaden
// a una pila, de callbacks, pero antes de esa pila se ejecuta el procedimiento principal

// console.log('Fin')

const getHeroByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
           const hero = getHeroById(id)
           
            if( hero ) {
                resolve( hero )
            }else {
                reject('Héroe no existe')
            }

        }, 1000)
    })
}

getHeroByIdAsync(200)
    .then( h => {
        console.log(`El héroe es ${h.name}`)
    })
    .catch( err => {
        console.log(err)
    })