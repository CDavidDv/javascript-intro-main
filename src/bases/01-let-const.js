// const no se puede volver a asignar despues de su asignación
const nombre = 'Juan';
const apellido = 'Perez';

//si se quiere volver a asigrnar se debe usar let
//apellido = 'Gomez';
//caught TypeError: Assignment to constant variable.
 

let valorDado = Math.random();

console.log(valorDado);
//0.8334832595911119
//se puede reasignar el valor de una variable
valorDado = Math.random();

console.log(valorDado);
//0.9987024796645452


//no utilizar var, utilizar let
//var se puede reasignar
//pero teniendo problemas de scope