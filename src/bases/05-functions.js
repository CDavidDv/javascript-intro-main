const heroes = [{
    id: 1,
    name: 'Batman',}
    ,{
    id: 2,
    name: 'Superman',
    
}]

// el metodo some retorna un booleano si encuentra algun elemento que cumpla con la condicion
const existe = (heroes.some(heroe => heroe.id === 1))

//el metodo find retorna el primer elemento que cumpla con la condicion
const existe2 = (heroes.find(heroe => heroe.id === 1))

//si no encuentra ningun elemento que cumpla con la condicion, retorna undefined


console.log(existe)
console.log(existe2)
