//crear la destructuracion de arrays

/* const numeros = [10,20,30,40,50];

const [n1,n2,n3,n4,n5] = numeros;   

console.log(n1);

console.log(n2);     */

//crear la destructuracion de arrays de arrays

const arrayReturn = ([letras,numeros2]) =>{
    return [letras,numeros2];
}

const [letras,numeros2] = arrayReturn(["abcdefg","121456"]);

console.log(letras);

console.log(numeros2);