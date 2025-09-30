// Escreva um programa que verifica se um número está dentro de um determinado intervalo.
let numeroMaior
let numeroMenor

let num01 = prompt("Digite o primeiro número que delimita o intervalo.");
while (isNaN(num01)) {
    num01 = Number(prompt("Por Favor, Digite apenas números."));
}

let num02 = prompt("Digite o segundo número, diferente do anterior, que delimita o intervalo.");
while (isNaN(num02) || num01 === num02) {
    num02 = Number(prompt("Digite novamente um número, ele deve ser diferente do anterior."));
}

if (num01 > num02) {
    (numeroMaior = num01, numeroMenor = num02);
} else {
    (numeroMenor = num01, numeroMaior = num02);
} 

let num03 = prompt("Digite um terceiro número para servir de entrada.");
while (isNaN(num03)) {
    num03 = Number(prompt("Por favor, digite apenas números"));
}

if (num03 <= numeroMaior && num03 >= numeroMenor) {
    alert(`O número ${num03} pertence ao intervalo entre ${numeroMenor} e ${numeroMaior}`);
} else {
    alert(`O número ${num03} não pertence ao intervalo entre ${numeroMenor} e ${numeroMaior}`);
}