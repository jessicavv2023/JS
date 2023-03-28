//- Imprima repetidamente el valor de la variable xValue, disminuyéndolo en 0,5 cada vez. Mientras xValue siga siendo positivo.

let xValue = 10;

while (xValue > 0) {
  console.log(xValue);
  xValue -= 0.5;
}
let i = 1;
//- Imprime todos los números impares entre 1 y 100
while (i <= 100) {
  if (i % 2 !== 0) {
    console.log("Parte 1", i);
  }
  i++;
}
//- Escribe un método con un bucle while para imprimir del 1 al n entre corchetes. Por ejemplo, si n = 6 imprimir [1] [2] [3] [4] [5] [6]
function printNumbersInBrackets(n) {
  let i = 1;

  while (i <= n) {
    console.log("[" + i + "]");
    i++;
  }
}

printNumbersInBrackets(6);

//Escribe un método con un bucle while que calcule la suma de los primeros n enteros positivos: suma = 1 + 2 + 3 + ... + n
function calculateSumOfN(n) {
  let sum = 0;
  let i = 1;

  while (i <= n) {
    sum += i;
    i++;
  }

  return sum;
}

console.log("Parte 4", +calculateSumOfN(5));
console.log("Parte 4", +calculateSumOfN(19));
