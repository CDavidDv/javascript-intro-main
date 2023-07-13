console.log("Inicio")

const promesa = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hola")
    }),1000
})


const medirTiempo = async() => {
    console.log("Inicio medir tiempo")
    console.log("terminar tiempo")

    await promesa
    return "final del tiempo"
}

medirTiempo().then( console.log)

console.log("Fin")