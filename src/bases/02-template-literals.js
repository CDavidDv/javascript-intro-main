// # templates literals 
const nombre = 'Juan';
const apellido = 'Perez';

//esta es una forma de concatenar
console.log('Nombre: (+)' + nombre + ' ' + apellido);

//esta es otra forma de concatenar y es un template literal porque igual puede ejecutar codigo
console.log(`Nombre: (template literal) ${nombre} ${apellido}`);

function getNombre() {
    return `${nombre} ${apellido}`;
}

console.log(`El nombre es: (template con funcion) ${getNombre()}`);


