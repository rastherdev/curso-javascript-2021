// while
let counter = 0;

while (counter <= 3) {
  console.log(counter);
  counter++;
}

// do while
let cont = 0;
do {
  console.log(cont);
  cont++;
} while (cont <= 2);

// for
for (let i = 0; i < 2; i++) {
  console.log(i);
}

// break en ciclos
for (j = 0; j <= 10; j++) {
  console.log(j);
  if (j % 2 === 0 && j != 0) {
    console.log(j);
    break;
  }
}
inicio:
// continue
for (v = 0; v <= 10; v++) {
  if (v % 2 !== 0) {
    continue inicio;
  } else {
    console.log(v);
  }
}
