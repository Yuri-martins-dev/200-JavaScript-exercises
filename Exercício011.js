// Escreva um programa que verifica se uma pessoa pode votar com base na idade.
let idade = Number(prompt("Digite a idade de uma pessoa:"));


while (isNaN(idade)) {
    idade = Number(prompt("Digite a idade usando apenas números, por favor."));
} 

if (idade >= 16) {
    alert("Esta pessoa pode votar.");
} else {
    alert("Esta pessoa não pode exercer o direito do voto.");
}