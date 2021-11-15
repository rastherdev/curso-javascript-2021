// let juegos = new Array("Ori", "GTA", "Stalker")
let juegos = ["Ori", "GTA", "Stalker"];
console.log(juegos);
console.log(juegos[1]);

// recorriendo arrays
for (let k = 0; k < juegos.length; k++) {
  console.log(juegos[k]);
}

// modificacion de arreglos
juegos[2] = "S.T.A.L.K.E.R"
console.log(juegos[2]);

juegos.push("Star Wars: Battlefront II");
console.log(juegos[3]);

console.log(juegos.length)
juegos[juegos.length] = "Resident Evil 7: Biohazard"

// verificar arreglo
console.log(typeof juegos);
console.log(Array.isArray(juegos))
console.log(juegos instanceof Array)