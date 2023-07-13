const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 28,
    direcccion: {   
        ciudad: 'Bogota',
        zip: 12345,
        lat: 14.1212,
        lng: -12.3232
    }
}

// para hacer una copia de un objeto se usa el operador spread
const persona2 = {...persona}

// para modificar una propiedad de un objeto se usa el operador spread
persona2.nombre = 'Carlos'
persona2.direcccion.ciudad = 'Medellin'

console.log(persona)
console.log(persona2)

// para hacer una copia de un objeto pero con las propiedades deseadas se usa el operador spread