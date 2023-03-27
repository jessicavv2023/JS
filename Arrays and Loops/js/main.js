//console.log("***for***");
//for (let cont = 0; cont < 100; cont += 5) {
//console.log(cont);
//}
//console.log("***while ***");
//let cont = 0;
//while (cont < 100) {
//console.log(cont);
//cont += 4;
//}

//console.log("***do while***");
//let contt = 8;
//do {
// console.log(contt);
//contt += 8;
//} while (contt < 100);

console.log("***nombres del banco parte 1 ***");
let libros = ["Sofia", "David", "Juan"];

for (let index = 0; index < libros.length; index++) {
  console.log(libros[index]);
}

console.log("***nombres del banco parte 2 ***");
libros = ["Sofia", "David", "Juan"];
libros.push("Sara", "Augustin");
const indexSofia = libros.indexOf("Sofia");
if (indexSofia > -1) {
  libros.splice(indexSofia, 1);
}

for (let index = 0; index < libros.length; index++) {
  console.log(libros[index]);
}
