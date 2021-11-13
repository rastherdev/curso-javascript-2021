let x, y;
x = 2, y = 10;
let z;
z = x+y; //suma
console.log(z);
z = x-y; // resta
console.log(z);
z = x/y; //division
console.log(z);
z = x*y; //multiplicacion
console.log(z);
z = x**y; //exponencial
console.log(z);
z = x%y; //residuo
console.log(z);

//incremento
//preincremento (++X)
z = ++ x;
console.log(z);
console.log(x);
//postincremento (X++)
z= y++;
console.log(z);
console.log(y);

//decremento
//predecremento (--X)
z = -- x;
console.log(z);
console.log(x);
//postdecremento (X--)
z = y--;
console.log(z);
console.log(y);

// precedencia de operadores
let a = 3, b=2, c = 1;
let res = a * b + c/a * a ** b;
console.log(res);

// operadores de asignacion
res += 3;
console.log(res);

// comparaciones
let r = 3, t = 2, e = "3";
let aa = r==t; // se revisa el valor sin importar el tipo
console.log(aa);
console.log(typeof aa);
z = r===e; // revisa los tipos
console.log(z);
z = r!=e;
console.log(z);

// operadores relacionales

z = r < t;
console.log(z);
z = r > t;
console.log(z);

let gg = 2;
if(gg%2 == 0){
    console.log("par");
}else{
    console.log("impar");
}

let edad = 20;
if (edad<=17) {
    console.log("eres menor de edad");
} else {
    console.log("eres mayor de edad");
}

// operador AND
let cantidad = 20;
if (cantidad >= 10 && cantidad<= 30) {
    console.log("ranged");
} else {
    console.log("not ranged")
}

// operador OR
let vacaciones = true, diaDescanso = false;
if (vacaciones || diaDescanso) {
    console.log("puede ir");
} else {
    console.log("no puede ir");
}

// ternario
let tern = (3==2) ? "verdadero" : 0;
console.log(tern);

let numeroAlv = 9;
let resultado = (numeroAlv % 2 === 0) ? "par" : "impar";
console.log(resultado);

// conversion de tipos de datos
let miNumero = "10";
console.log(miNumero);
console.log(typeof miNumero);
let miNumeroInt = Number(miNumero);
console.log(typeof miNumeroInt);
let miNumeroString = String(miNumeroInt);
console.log(typeof miNumeroString);


// NaN
let alv = "10c";
if(isNaN(alv)){
    console.log("is NaN");
}else{
    console.log("is not a NaN");
}