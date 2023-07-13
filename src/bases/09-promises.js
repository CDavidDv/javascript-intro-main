import { getHeroById } from './bases/08-imp-exp';
// promesas en js


//console.log('inicion')
// new Promise((resolve, reject) => {
//     console.log("Cuerpo de la promesa")
//     resolve("Promesa resuelta")
// })

// .then(console.log)
// .catch(console.log)

const getHeroByIdAsync = (id) => {
    
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const hero = getHeroById(id);
            if (hero) {
                resolve(hero);
            } else {
                reject('Hero not found');
            }
        }, 1000)
    
    })
}

getHeroByIdAsync(1)
    .then(console.log)
    .catch(console.log);