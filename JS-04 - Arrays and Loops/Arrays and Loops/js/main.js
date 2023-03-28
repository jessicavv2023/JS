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
console.log("***nombres del banco parte 3 ***");
libros = ["Sofia", "David", "Juan"];
libros.push("Sara", "Augustin");

libros.push("Elena");
libros.splice(2, 0, "Renata");
const Sofia = libros.indexOf("Sofia");
if (Sofia > -1) {
  libros.splice(indexSofia, 1);
}

for (let index = 0; index < libros.length; index++) {
  console.log(libros[index]);
}
