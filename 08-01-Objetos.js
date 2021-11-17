// constructor
function Persona(nombre, apellido, email){
    this.nombre = nombre,
    this.apellido = apellido,
    this.email = email
    this.nombreCompleto = function() {
        return this.nombre + ' ' + this.apellido
    }
}

// pripiedades sobre prototipos
Persona.prototype.tel = '21221221';

let papa = new Persona('Domingo', 'Dominguez', 'dom@gmail.com')
papa.tel = '232123123'
let mama = new Persona('Martha', 'Ponce', 'mar@gmail.com')

console.log(papa)
console.log(mama)
console.log(papa.nombreCompleto())
let miObjeto = new Object()
let miObjeto2 = {}


// let persona = {
//   nombre: "Evito",
//   apellido: "Dolores de Hoyo",
//   email: "evito@gmail.com",
//   edad: 20,
//   idioma: "es",
//   get contatenar() {
//     return this.nombre + " " + this.apellido;
//   },
//   get idioma(){
//       return this.idioma;
//   },
//   set idioma(idioma) {
//     this.idioma = idioma;
//   },
// };

// // accediendo por atributo o propiedad
// console.log(persona.nombre);
// console.log(persona["apellido"]);
// console.log(persona.edad);

// // for in
// for (propiedad in persona) {
//   console.log(propiedad);
//   console.log(persona[propiedad]);
// }

// // agregar y eliminar propiedades
// persona.tel = "41239381292";
// console.log(persona);
// // eliminando
// delete persona.tel;
// console.log(persona);

// // imprimiendo objetos
// console.log(persona.nombre + " " + persona.apellido + " " + persona.edad);
// for (propiedad in persona) {
//   console.log(persona[propiedad]);
// }
// let personaArray = Object.values(persona);
// console.log(personaArray);
// let personaString = JSON.stringify(persona);
// console.log(personaString);

// // metodos get y set
// console.log(persona.contatenar);

let p1 = {
    nombre : 'juan',
    apellido : 'perez',
    nombreCompleto : function(titulo, tel){
        return this.nombre + ' ' + ' ' + this.apellido + ' ' + titulo + ' ' + tel
    }
}

let p2 = {
    nombre : 'pedrito',
    apellido : 'sola'
}

// uso de Call para acceder a metodos de objetos ajenos
console.log(p1.nombreCompleto())
console.log(p1.nombreCompleto.call(p2, 'ingeniero', '3131231231'))

// uso de Aply, envio de parametros por medio de un arrelgo
console.log(p1.nombreCompleto.apply(p2, ['comediante', '231231223']))