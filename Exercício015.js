//Escreva um programa que verifica se uma palavra é um palíndromo.
let palavra = prompt("Digite uma palavra par averiguarmos se ela é um palíndromo:");
let arrayLetras = palavra.split("");
arrayLetras.reverse("")
let palavraInvertida = arrayLetras.join("");

console.log(palavra);
console.log(palavraInvertida);
if (palavra === palavraInvertida) {
    alert(`A palavra ${palavra} é um palíndromo.`);
} else {
    alert(`A palavra ${palavra} não é um palíndromo`);
}