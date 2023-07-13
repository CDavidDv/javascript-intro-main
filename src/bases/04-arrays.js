
arreglo  = [1,2,3,4,5,6,7,8,9,10]

console.log(arreglo.length)

arreglo.push(11)

console.log(arreglo)

//crear un nuevo arreglo con los mismos valores
arreglo2 = [...arreglo]

arreglo2.pop()

console.log(arreglo2)

//crear un nuevo arreglo con los mismos valores pero multiplicados por dos
//algunos metodos de arrays retornan un nuevo arreglo
arreglo3 = arreglo2.map(function(valor){
    return valor * 2
})

console.log(arreglo3)