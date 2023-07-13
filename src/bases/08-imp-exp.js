/* import { owners } from './data/heroes' */
import Superheroes from '../data/heroes'

// getHeroById  
// FIND
export const getHeroById = (id) => {
    return Superheroes.find(hero => hero.id === id)
}

// getHeroesByOwner
// FILTER
export const getHeroesByOwner = (owner) => {
    return Superheroes.filter(hero => hero.owner === owner)
}

// asi se impotan funciones de otro archivo
/* import { getHeroById,getHeroesByOwner } from './bases/08-imp-exp'


console.log(getHeroesByOwner('DC'))
console.log(getHeroById(2))
 */