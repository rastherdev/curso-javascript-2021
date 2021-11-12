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

