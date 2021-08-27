
import heroes, { owners } from '../data/heroes'

// En el heroes coge la importación por defecto,
// En el owners coge el export que no es por defecto


const [ dc, marvel ] = owners


console.log( dc )
console.log( marvel )

console.log(heroes)


// Tarea crear funcion getHeroById (id)
// Funcion de flecha, usar el metodo find
// Otra funcione getHeroesByOwner ('DC, 'Marvel')
// Que haga que solo aparezcan los heroes de la editorial que se introduzca

export const getHeroById = (id) => heroes.find( (heroe) => heroe.id === id)


export const getHeroesByOwner = (owner) => heroes.filter( (element) => element.owner === owner)

// La tarea 2
// import { getHeroById } from './bases/08-imp-exp'
// import { getHeroesByOwner } from './bases/08-imp-exp'


// console.log(getHeroById(4))

// console.log(getHeroesByOwner('DC'))