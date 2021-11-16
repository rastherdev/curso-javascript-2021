// funciones
function miFuncion(a, b) {
  console.log(a + b);
}
miFuncion(1, 5);
miFuncion(20, 30);

// return
function miFuncion2(a, b, c) {
  console.log(arguments.length);
  return a + b + c;
}
let res = miFuncion2(1, 2, 3);
console.log(res);

// self invoking
(function (f, g) {
  console.log(f + g);
})(4, 6);

console.log(typeof miFuncion2);
var miFuncion2Texto = String(miFuncion2);
console.log(miFuncion2Texto);

// funciones flecha
let sumarFlecha = (i, o) => i + o;
console.log(sumarFlecha(1, 2));


// parametros por defecto
function miFuncion3(x=1, y=2){
    return x+y
}
let gg = miFuncion3()
console.log(gg)

// parametros dinamicos
let z = sumarAlch(1, 2, 4, 5, 6);
function sumarAlch() {
    let suma = 0;
    for (let h = 0; h < arguments.length; h++) {
        suma += arguments[h];
    }
    return suma;
}
console.log(z);

// paso por valor
// primitivo 
let xx = 10
function cambiarValor(az){
    az = 20
}
cambiarValor(xx);
console.log(xx)

// paso por referencia
const persona = {
    nombre : "Alma Marcela",
    apellido : "Gozo"
}
function cambiarValorObjeto(p1){
    p1.nombre = "Devora";
    p1.apellido = "Meltroso";
}
cambiarValorObjeto(persona)
console.log(persona);
