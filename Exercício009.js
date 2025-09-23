//Escreva um programa que recebe um número e verifica se ele é positivo, negativo ou zero.
let num = prompt("Digite um número.");
num = Number(num);

if (isNaN(num)) {
    prompt("Por favor, digite apenas números!");
} else if (num == 0) {
    alert("O número não é nem positivo nem negativo pois é o zero.");
} else if (num < 0) {
    alert("O número é negativo. ");
} else {
    alert("O número é positivo.");
}