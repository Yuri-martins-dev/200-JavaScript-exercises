//Escreva um programa que determina se um número é par ou ímpar.

let num = prompt("Digite um número!");
while(isNaN(num)) {
    num = Number(prompt("Por favor, digite apenas números!"));
}
if  (num % 2 === 0) {
    alert(`O número ${num} é par.`);
} else {
    alert(`O número ${num} é ímpar`);
}