// Tipos de datos utilizados
// en Javascript

// srings
var nombre = "Carlos";
console.log(nombre);
console.log(typeof nombre)
// type of -> es para ver que tipo de dato es la variable

nombre = 19;
console.log(typeof nombre)
// numeros

var numero = 19;
console.log(numero);

// objetos
var objeto = {
    nombre : "Alma Marcela",
    apellido : "Gozo",
    tel : "5577441929"
}
console.log(objeto);

var estado = true;
console.log(estado);
console.log(typeof estado);

// tipo funciones
function miFuncion(){}
console.log(miFuncion);

// tipo symbol
var symbolo =  Symbol();
console.log("mi simbolo");

// tipo clase
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);
console.log(typeof Persona);

// tipo undefined
var x;
console.log(x);
console.log(typeof x);

// null => ausencia de valor
var y = null; 
console.log(y)
console.log(typeof y);

// tipo arreglos -> object

var autos = ['mazda', 'tsuru', 'ambulancia'];
console.log(autos);
var z = '';
console.log(z);

// concatenar strings
var nombre = "Giovany";
var apellido = "Dominguez";
var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

// sintaxis basica de variables
let adjetivo = "el cagao";
console.log(adjetivo);
const alv = "Lara";

// buenas practicas de variables
let nombreCompleto2 = "El Cagao Ramirez";