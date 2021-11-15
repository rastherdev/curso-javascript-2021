let condicion = true;

if (condicion) {
  console.log("es verdadero");
} else {
  console.log("es falsa");
}

let entrada = 1;

if (entrada === 1) {
  console.log("es 1");
} else if (entrada === 2) {
  console.log("es 2");
} else if (entrada === 3) {
  console.log("es 3");
} else if (entrada === 4) {
  console.log("es 4");
} else {
  console.log("is NaN");
}

let hora = 19;
if (hora >= 0 && hora <= 6) {
  console.log("durmiendo");
}
if (hora >= 7 && hora <= 11) {
  console.log("buenos dias");
}
if (hora >= 12 && hora <= 18) {
  console.log("buenas tardes");
}
if (hora >= 19 && hora <= 24) {
  console.log("buenas noches");
}

let n = 1;
switch (n) {
  case 1:
    console.log("es 1");
    break;
  case 2:
    console.log("es 2");
    break;
  case 3:
    console.log("es 3");
    break;
  case 4:
    console.log("es 4");
    break;

  default:
    console.log("no encontrado");
    break;
}

let mes = 1;

switch (mes) {
  case 1:
  case 2:
  case 12:
    console.log("es invierno");
    break;
  case 3:
  case 4:
  case 5:
    console.log("es primavera");
    break;

  case 6:
  case 7:
  case 8:
    console.log("es verano");
    break;
  case 9:
  case 10:
  case 11:
    console.log("es otonio");
    break;

  default:
      console.log("desconocido")
    break;
}
