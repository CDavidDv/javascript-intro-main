// Destructuración de objetos

// la destructuración de objetos consiste en extraer datos de un objeto a través de sus propiedades.

const person = {
    name: "tony",
    age: 45,
    codeName: "Ironman" 
}

const { name } = person 

console.log(name) // tony

const createHero = ({name, age, codeName}) => ({id: 123,    
    name,   
    age,
    codeName
})


console.log(createHero(person))

// Destructuración de arreglos